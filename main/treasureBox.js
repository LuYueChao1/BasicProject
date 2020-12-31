import sha256 from 'sha256'
class TreasureBox{
    constructor(boxNum,preBoxHashValue){
        this.boxNum=boxNum
        this.preBoxHashValue=preBoxHashValue
        this.openStatus=false
    }
    tryOpenTreasureBox(secretNum){
        if(this.openStatus){
            return 'this treasureBox has been open'
        }
        getHashStr=sha256(this.boxNum+this.timeNum+this.preBoxHashValue+secretNum)
        console.log(getHashStr)
        if(getHashStr.substr(0,5)==='00000'){
            console.log('............')
            this.openStatus=true
            return true
        }else{
            return false
        }
    }
}

export default TreasureBox