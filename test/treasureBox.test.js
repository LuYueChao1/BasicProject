import TreasureBox from '../main/treasureBox'
import TreasureBoxOpen from '../main/openTreasureBox'

test('宝盒测试',()=>{
    let treasureBox=new TreasureBox(1,'0')
    let openResult=treasureBox.tryOpenTreasureBox(1)
    if(treasureBox.hashStr==='00000'){
        expect(openResult).toBe(true)
    }else{
        expect(openResult).toBe(false)
    }
    let treasureBoxOpen=new TreasureBoxOpen()
    treasureBoxOpen.openTheTreasureBox(treasureBox)
    openResult=treasureBox.tryOpenTreasureBox(1)
    expect(openResult).toBe('this treasureBox has been open')

})