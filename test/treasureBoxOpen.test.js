import TreasureBoxOpen from '../main/openTreasureBox'
import TreasureBox from '../main/treasureBox'

test('打开宝盒测试',()=>{
    let firstTreasureBox=new TreasureBox(1,'0')
    let treasureBoxOpen=new TreasureBoxOpen()
    let box=treasureBoxOpen.openTheTreasureBox(firstTreasureBox)
    expect(box.hashStr.substr(0,5)).toBe('00000')
})