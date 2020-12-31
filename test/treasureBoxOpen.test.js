import TreasureBoxOpen from '../main/openTreasureBox'
import TreasureBox from '../main/treasureBox'

test('宝箱测试',()=>{
    let firstTreasureBox=new TreasureBox(1,'0')
    let treasureBoxOpen=new TreasureBoxOpen(firstTreasureBox)
    expect(treasureBoxOpen.getSecretNum(firstTreasureBox)).toBe(1)
})