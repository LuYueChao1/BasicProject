import TreasureBox from './treasureBox'
import TreasureBoxOpen from './openTreasureBox'
class TenTreasureBox{
    constructor(){
        this.firstBox=new TreasureBox(1,'0')
        this.treasureBoxList=[]
    }
    getTenOpenedTreasureBox(){
        let treasureBoxOpen=new TreasureBoxOpen()
        treasureBoxOpen.openTheTreasureBox(this.firstBox)
        this.treasureBoxList.push(this.firstBox)
        console.log(this.firstBox)
        for(let i=0;i<9;i++){
            let listLength=this.treasureBoxList.length
            let preTreasureBox=this.treasureBoxList[listLength-1]
            let treasureBox=new TreasureBox(listLength+1,preTreasureBox.hashStr)
            treasureBoxOpen.openTheTreasureBox(treasureBox)
            console.log(treasureBox)
            this.treasureBoxList.push(treasureBox)
        }
    }
}
export default TenTreasureBox