export function calculateStandings(workouts, scores) {
  return function(competitors) {
    // add totalScore attribute to competitors
    let competitorsWithTotalScore = addTotalScoreToCompetitors(competitors)
    // // split scores by division
    const scoresForCompetitors = getScoresForCompetitors(scores, competitorsWithTotalScore)
    workouts.forEach(workout => {
      // get scores for workout
      const scoresForCurrentWorkout = getScoresByWorkoutId(scoresForCompetitors, workout.id)
      // sort competitors by score
      const sortedCompetitors = sortCompetitorsListByScore(
        competitorsWithTotalScore,
        scoresForCurrentWorkout,
        workout.type,
      )
      // increment total score (this works for both valid and invalid scores)
      competitorsWithTotalScore = calculateTotalScore(sortedCompetitors)
    })
    // calculate overall ties
    const sortedCompetitorsWithTotalScore = competitorsWithTotalScore.sort((a, b) =>
      sortObjectsByKey(a, b, 'totalScore'),
    )
    let tieCounter = 1
    const competitorsWithStandings = sortedCompetitorsWithTotalScore.map(
      (competitor, i, origArr) => {
        const isTie = calculateTie(competitor, origArr, i, 'totalScore')
        if (isTie) {
          return {...competitor, standing: tieCounter}
        }
        tieCounter = i + 1
        return {...competitor, standing: tieCounter}
      },
    )
    return competitorsWithStandings
  }
}

function sortCompetitorsByNormalWorkout(competitors, scores) {
  const [validScores, validCompetitors, invalidCompetitors] = splitScoresByValidity(
    competitors,
    scores,
  )
  // add scores to competitors
  const validCompetitorsWithScore = addScoresToCompetitors(validCompetitors, validScores)
  const sortedCompetitors = validCompetitorsWithScore.sort((a, b) => {
    return b.score - a.score
  })
  return [...sortedCompetitors, ...invalidCompetitors]
}

function sortCompetitorsByTimedWorkout(competitors, scores) {
  const [validScores, validCompetitors, invalidCompetitors] = splitScoresByValidity(
    competitors,
    scores,
  )
  // sort the competitors that have a score
  const validCompetitorsWithScore = addScoresToCompetitors(validCompetitors, validScores)
  const sortedCompetitors = validCompetitorsWithScore.sort((a, b) => {
    return a.score - b.score
  })
  // return each group of competitors
  return [...sortedCompetitors, ...invalidCompetitors]
}

function splitScoresByValidity(competitors, scores) {
  // get scores with that are valid (not zero)
  const validScores = scores.filter(score =>
    competitors.some(competitor => competitor.id === score.competitorId && score.score !== 0),
  )

  // get all scores that are non-valid (zero)
  const invalidScores = scores.filter(score =>
    competitors.some(competitor => competitor.id === score.competitorId && score.score === 0),
  )

  // match valid scores to competitors
  const validCompetitors = competitors.filter(competitor =>
    validScores.some(score => competitor.id === score.competitorId),
  )

  // match invalid scores to competitors
  const invalidCompetitors = competitors.filter(competitor =>
    invalidScores.some(score => competitor.id === score.competitorId),
  )

  return [validScores, validCompetitors, invalidCompetitors]
}

const calculateTie = (currCompetitor, array, currIndex, key) => {
  if (array[currIndex - 1] && currCompetitor[key] === array[currIndex - 1][key]) {
    return true
  }
  return false
}

const sortCompetitorsListByScore = (competitors, scores, workoutType) => {
  return workoutType === 'Timed'
    ? sortCompetitorsByTimedWorkout(competitors, scores)
    : sortCompetitorsByNormalWorkout(competitors, scores)
}

const calculateTotalScore = competitors => {
  let tieCounter = 1
  const updatedCompetitors = competitors.map((competitorWithScore, index, originalArr) => {
    const {score, ...competitor} = competitorWithScore
    // check if competitor has a valid score associated
    if (score) {
      const isTie = calculateTie(competitorWithScore, originalArr, index, 'score')
      if (!isTie) {
        tieCounter = index + 1
        return {...competitor, totalScore: competitor.totalScore + tieCounter}
      }
      return {...competitor, totalScore: competitor.totalScore + tieCounter}
    }
    // not valid score, add to bottom
    return {...competitor, totalScore: competitor.totalScore + competitors.length}
  })
  return updatedCompetitors
}

const getScoresForCompetitors = (allScores, competitors) => {
  const filteredScores = allScores.filter(({competitorId}) =>
    competitors.some(competitor => competitor.id === competitorId),
  )
  return filteredScores
}

const getScoresByWorkoutId = (allScores, workoutId) => {
  const filteredScores = allScores.filter(score => workoutId === score.workoutId)
  return filteredScores
}

const addScoresToCompetitors = (competitors, scores) => {
  const competitorsWithScore = competitors.map(competitor => {
    const scoreObj = scores.find(score => score.competitorId === competitor.id)
    return {...competitor, score: scoreObj.score}
  })
  return competitorsWithScore
}

const addTotalScoreToCompetitors = competitors => {
  const totalScoreCompetitors = competitors.map(competitor => ({
    ...competitor,
    totalScore: 0,
  }))
  return totalScoreCompetitors
}

const sortObjectsByKey = (a, b, key) => {
  if (a[key] > b[key]) {
    return 1
  } else if (a[key] < b[key]) {
    return -1
  }
  return 0
}
