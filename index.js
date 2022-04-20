let currentId = 1;
export function createGame(player1Name, player2Name) {
  const player1 = {}
  player1.name = player1Name
  player1.score = 0
  const player2 = {}
  player2.name = player2Name
  player2.score = 0

  const game = {
    id: currentId++,
    isComplete: false,
    players: [],
    score: function (playerName) {
      if (player1.name === playerName) {
        player1.score++
      } else {
        player2.score++
      }
    },
  }

  game.players.push(player1)
  game.players.push(player2)

  return game
}

export function getScore(game) {
  const player1 = game.players[0]
  const player2 = game.players[1]
  const player1Score = game.players[0].score
  const player2Score = game.players[1].score
  let score = ""

  if (player1Score === player2Score) {
    switch (player1Score) {
      case 0:
        score = "Love-All";
        break;
      case 1:
        score = "Fifteen-All";
        break;
      case 2:
        score = "Thirty-All";
        break;
      default:
        score = "Deuce";
        break;
    }
  } else if (player1Score >= 4 || player2Score >= 4) {
    const minusResult = player1Score - player2Score
    if (minusResult === 1) score = "Advantage player1";
    else if (minusResult === -1) score = "Advantage player2";
    else if (minusResult >= 2) score = "Win for " + player1.name
    else score = "Win for " + player2.name
  } else {
    let tempScore
    score = ""
    for (let i = 1; i < 3; i++) {
      if (i === 1) tempScore = player1Score
      else {
        score += "-";
        tempScore = player2Score
      }
      switch (tempScore) {
        case 0:
          score += "Love";
          break;
        case 1:
          score += "Fifteen";
          break;
        case 2:
          score += "Thirty";
          break;
        case 3:
          score += "Forty";
          break;
      }
    }
  }

  return score
}
