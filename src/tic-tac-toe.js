class TicTacToe {
    constructor() {
			this.playerSymbol = 'x';
			this.matrix = [
				[null, null, null],
				[null, null, null],
				[null, null, null],
			];
			this.countTurn = 9;
			this.countCellX = 0;
			this.countCellO = 0;
    }
		
    getCurrentPlayerSymbol() {
			// if (this.playerSymbol === 'o') {
			// 	this.playerSymbol = 'x';
			// console.log(this.matrix[rowIndex][columnIndex])

			return this.playerSymbol;
			// } else {
				// this.playerSymbol = 'o';
				// return this.playerSymbol;
			// }
    }

    nextTurn(rowIndex, columnIndex) {
			if (this.matrix[rowIndex][columnIndex] == null) {
				//set symbol
				this.matrix[rowIndex][columnIndex] = this.playerSymbol;
				//change symbol
				if (this.playerSymbol === 'o') {
					this.playerSymbol = 'x';
				} else {
					this.playerSymbol = 'o';
				}
				this.countTurn = this.countTurn-1;
			}
    }

    isFinished() {
			if (this.noMoreTurns() || (this.getWinner() !== null)) {
				return true;
			} else {
				return false;
			}
    }
		

		checkWinner() {
			if (this.countCellO === 3) {
				return 'o';
			} else if (this.countCellX === 3) {
				return 'x';
			}
			else {
				this.countCellO = 0;
				this.countCellX = 0;
			}
		}

    getWinner() {
			
			for (let i = 0; i < 3; i++) {
				// check horizontal line
				for (let j = 0; j < 3; j++) {
					if (this.matrix[i][j] === 'x') {
						this.countCellX = this.countCellX + 1;
					} else if (this.matrix[i][j] === 'o') {
						this.countCellO = this.countCellO + 1;
					}
				}

				// check winner
				if (this.checkWinner()) {
					return this.checkWinner();
				}
			}

			for (let i = 0; i < 3; i++) {
				// check vertical line
				for (let j = 0; j < 3; j++) {
					if (this.matrix[j][i] === 'x') {
						this.countCellX = this.countCellX + 1;
					} else if (this.matrix[j][i] === 'o') {
						this.countCellO = this.countCellO + 1;
					}
				}

				// check winner
				if (this.checkWinner()) {
					return this.checkWinner();
				}
			}

			for (let i = 0; i < 3; i++) {
				// check diagonal line1
				if (this.matrix[i][i] === 'x') {
					this.countCellX = this.countCellX + 1;
				} else if (this.matrix[i][i] === 'o') {
					this.countCellO = this.countCellO + 1;
				}
			}
				// check winner
				if (this.checkWinner()) {
					return this.checkWinner();
				}
			

			for (let i = 2, j = 0; i >= 0; i--, j++) {
				// check diagonal line2
				if (this.matrix[i][j] === 'x') {
					this.countCellX = this.countCellX + 1;
				} else if (this.matrix[i][j] === 'o') {
					this.countCellO = this.countCellO + 1;
				}
			}
				// check winner
				if (this.checkWinner()) {
					return this.checkWinner();
				}
			
			return null;

		}

    noMoreTurns() {
			if (this.countTurn === 0) {
				return true;
			} else return false;
    }

    isDraw() {
			if (this.noMoreTurns() && (this.getWinner() === null)) {
				return true;
			} else {
				return false;
			}
    }

    getFieldValue(rowIndex, colIndex) {
			return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
