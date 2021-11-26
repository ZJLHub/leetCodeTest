export default class MinStack {
    constructor() {

    }
    private _stack: number[] = [];
    private _soltArr: number[] = [];

    push(x: number): void {

        this._stack.push(x);
        if (this._soltArr.length == 0) {
            this._soltArr.push(x);
        } else {//多个
            
            

            this._soltArr.push(x);
            //查找排列下标
            let index = 0;
            for (let i = 0; i < this._soltArr.length; i++) {
                index = i;
                if (this._soltArr[i] > x) {
                    break;
                }
                
            }
            // console.log("index::::::::::::",index);
            // this._soltArr = this._soltArr.splice(index,0,x);
            
            for(let i=this._soltArr.length-1;i>index;i--){
                let temp = this._soltArr[i-1];
                let tempwb = this._soltArr[i];
                this._soltArr[i] = temp;
                this._soltArr[i-1] = tempwb;
                // console.log("i:::::",i,"temp:::",temp,"tempwb",tempwb);
            }

            // console.log("push   this._soltArr:::", this._soltArr);
        }

    }

    pop(): void {
        let tar = this._stack.pop();
        let index = this._soltArr.indexOf(tar);
        this._soltArr.splice(index, 1);
        // console.log("pop   this._soltArr::",this._soltArr);
    }

    top(): number {//妈的top竟然是最后一个数值，靠，整个题意都理解错了
        // console.log("top::::",this._soltArr[this._soltArr.length - 1]);
        return this._soltArr[this._soltArr.length - 1];
    }

    min(): number {
        console.log("min:::::",this._soltArr[0]);
        return this._soltArr[0];
    }
}
