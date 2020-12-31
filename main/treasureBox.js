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
        let getHashStr=sha256(this.boxNum+this.preBoxHashValue+secretNum)
        if(getHashStr.substr(0,5)==='00000'){
            this.secretNum=secretNum
            this.openStatus=true
            this.hashStr=getHashStr
            return true
        }else{
            return false
        }
    }
}

export default TreasureBox