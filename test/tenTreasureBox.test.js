import TreasureBoxOpen from '../main/openTreasureBox'
import TreasureBox from '../main/treasureBox'
import TenTreasureBox from '../main/openTenTreasureBox'

test('宝箱测试',()=>{
    let tenTreasureBox=new TenTreasureBox()
    tenTreasureBox.getTenOpenedTreasureBox()
    expect(tenTreasureBox.treasureBoxList.length).toBe(10)
})