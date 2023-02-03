const prompt=require("prompt-sync")();
let pattern =prompt("Enter the sentence:");
let name=prompt("Enter the word to search:");
temp=pattern.split("");
for(i=0;i<temp.length;i++)
{
    if(temp[i]==name)
    {
        console.log("The word is at position:"+(i+1));
    }
}

