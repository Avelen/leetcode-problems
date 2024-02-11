/**
 * @param {number[][]} grid
 * @return {number}
 */
var func = function(row, c1, c2, grid,dp){
    if(c1<0 || c2<0 || c1>= grid[0].length || c2>= grid[0].length){
        return 0;
    }
    if(row == grid.length){
        return 0;
    }
    if(dp[row][c1][c2]!=-1) return dp[row][c1][c2];
    let sum = 0;
    sum += grid[row][c1];
    sum += grid[row][c2];
    let maxi = Number.MIN_SAFE_INTEGER;
    for(var i = c1-1; i<=c1+1;i++){
        for(var j = c2-1; j<=c2+1; j++){
            if(i < j){
                maxi = Math.max(maxi, func(row+1, i, j, grid, dp))
            }

        }
    }
    sum += maxi;
    return dp[row][c1][c2] = sum;
}

var cherryPickup = function(grid) {
    let rows = grid.length;
    let col = grid[0].length;
    let dp = new Array(rows).fill(-1)
    for(i in dp){
        dp[i] = new Array(col).fill(-1)
        for(j in dp[i]){
            dp[i][j] = new Array(col).fill(-1)
        }

    }
    //row all robots start at, col of r1, col of r2
    return func(0,0,col-1,grid,dp);
};