import sha256 from 'sha256'
class TreasureBox{
    constructor(boxNum,preBoxHashValue){
        this.boxNum=boxNum
        this.preBoxHashValue=preBoxHashValue
    }
    openTreasureBox(secretNum){
        this.timeNum=(new Date()).valueOf()
        getHashStr=sha256(this.boxNum+this.timeNum+this.preBoxHashValue+secretNum)
        if(getHashStr.split(0,5)==='00000'){
            return true
        }else{
            return false
        }
    }
}