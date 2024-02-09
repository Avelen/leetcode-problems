/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let ans=[];
    let prev=[];
     nums.sort((a,b)=>a-b);
     for(let i=0;i<nums.length;i++){
         let curr=[]
          for(j=i-1;j>=0;j--){
              let n=prev[j].length;
              let top=prev[j][n-1];
             if(nums[i]%top==0 && n>curr.length)
                curr=[...prev[j]]
          }
          curr.push(nums[i])
          prev[i]=curr;
          if(ans.length<curr.length)
           ans=curr;
     }
     return ans;
};