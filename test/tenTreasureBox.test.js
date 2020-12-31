import TreasureBoxOpen from '../main/openTreasureBox'
import TreasureBox from '../main/treasureBox'
import TenTreasureBox from '../main/openTenTreasureBox'

test('获取十个打开的宝盒测试',()=>{
    let tenTreasureBox=new TenTreasureBox()
    tenTreasureBox.getTenOpenedTreasureBox()
    expect(tenTreasureBox.treasureBoxList.length).toBe(10)
    expect(tenTreasureBox.treasureBoxList[0].preBoxHashValue).toBe('0')
    expect(tenTreasureBox.treasureBoxList[1].preBoxHashValue).toBe(tenTreasureBox.treasureBoxList[0].hashStr)
    expect(tenTreasureBox.treasureBoxList[3].preBoxHashValue).toBe(tenTreasureBox.treasureBoxList[2].hashStr)
    for(let i=0;i<10;i++){
        expect(tenTreasureBox.treasureBoxList[i].hashStr.substr(0,5)).toBe('00000')
        if(i>0){
            expect(tenTreasureBox.treasureBoxList[i].preBoxHashValue).toBe(tenTreasureBox.treasureBoxList[i-1].hashStr)
        }
    }
})