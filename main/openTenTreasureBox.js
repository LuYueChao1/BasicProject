import TreasureBox from './treasureBox'
import TreasureBoxOpen from './openTreasureBox'
class TenTreasureBox{
    constructor(){
        this.firstBox=new TreasureBox(1,'1')
        this.treasureBoxList=[]
    }
    getTenOpenedTreasureBox(){
        let treasureBoxOpen=new TreasureBoxOpen()
        treasureBoxOpen.openTheTreasureBox(this.firstBox)
        this.treasureBoxList.push(this.firstBox)
        for(let i=0;i<9;i++){
            let listLength=this.treasureBoxList.length
            let preTreasureBox=this.treasureBoxList[listLength-1]
            let treasureBox=new TreasureBox(listLength,preTreasureBox.hashStr)
            treasureBoxOpen.openTheTreasureBox(treasureBox)
            console.log(treasureBox.hashStr)
            this.treasureBoxList.push(treasureBox)
        }
    }
}
export default TenTreasureBox