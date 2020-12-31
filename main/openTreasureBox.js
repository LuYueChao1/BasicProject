class TreasureBoxOpen{
    openTheTreasureBox(treasureBox){
        let secretNum=1
        for(let i=0;i>=0;i++){
            if(treasureBox.tryOpenTreasureBox(secretNum)){
                i=-2
                console.log(secretNum)
            }
            secretNum++
        }
        return treasureBox
    }

}
export default TreasureBoxOpen