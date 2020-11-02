const chai = require('chai');
const assert = chai.assert;
const functions= require('../functions');

describe('sum', function(){
    
    it('should return 4 when adding 2 and 2', function(){
        assert.equal(functions.sum(2, 2), 4);
    });

    it('should return 0 when adding 5 and -5', function(){
        assert.equal(functions.sum(5, -5), 0);
    });

    it('should return 10.1 when adding 9 and 1.1', function(){
        assert.equal(functions.sum(9, 1.1), 10.1);
    });
});

describe('product', function(){

    it('it should return 10 when multiplying 2 and 5', function(){
        assert.equal(functions.product(2, 5), 10);
    });

    it('it should return 0 when multiplying 0 and 8', function(){
        assert.equal(functions.product(0, 8), 0);
    });

    it('it should return -4 when multiplying 2 and -2', function(){
        assert.equal(functions.product(2, -2), -4);
    });
});

describe('min', function(){

    it('it should return 2 when numbers are 2 and 2', function(){
    assert.equal(functions.min(2, 2),2);
    });

    it('it should return 0 when numbers are 0 and 6', function(){
        assert.equal(functions.min(0, 6), 0);
    });

    it('it should return -7 when numbers are -1 and -7', function(){
        assert.equal(functions.min(-1, -7), -7);
    });
});

 describe('max', function(){

    it('it should return 2 when numbers are 2 and 2', function(){
        assert.equal(functions.max(2, 2),2);
    });

    it('it should return 0 when numbers are 0 and 6', function(){
        assert.equal(functions.max(0, 6), 6);
    });

    it('it should return -7 when numbers are -1 and -7', function(){
        assert.equal(functions.max(-1, -7), -1);
    });
});

describe('head', function(){

    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.head(arr));
    });

    it ('it should return [4] when the array is [4,a,hey]', function(){
        let arr =[4,'a','hey'];
        assert.equal(functions.head(arr),4);
    });

    it ('it should return hey when the array is [hey]', function(){
        let arr =['hey'];
        assert.equal(functions.head(arr),'hey');
    });
});              
       

describe('tail', function(){

    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.tail(arr));
    });

    it ('it should return 3 when the array is [1,2,3]', function(){
        let arr =[1,2,3];
        assert.equal(functions.tail(arr),3);
    });

    it ('it should return hey when the array is [hey]', function(){
        let arr =['hey'];
        assert.equal(functions.tail(arr),'hey');
    });
});

describe('mid', function(){

    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.mid(arr));
    });

    it ('it should return [4] when the array is[3,4,7]', function(){
        let arr =[3,4,7];
        assert.equal(functions.mid(arr),4);
    });

    it ('it should return [4,7] when the array is [3,4,7,2]', function(){
        let arr =[3,4,7,2];
        assert.deepEqual(functions.mid(arr),[4, 7]);
    });
});

describe('total', function(){

    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.total(arr));
    });

    it ('it should return [6] when the array is [1,2,3]', function(){
        let arr =[1,2,3];
        assert.equal(functions.total(arr),6);
    });

    it ('it should return [1] when the array is [1]', function(){
        let arr =[1];
        assert.equal(functions.total(arr),1);
    });
});

describe('average', function(){

    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.average(arr));
    });

    it ('it should return 8 when the array is [10,2,9,11]', function(){
        let arr =[10,2,9,11];
        assert.equal(functions.average(arr),8);
    });

    it ('it should return 2.5 when the array is [3,2]', function(){
        let arr =[3,2];
        assert.equal(functions.average(arr),2.5);
    });
});

describe('smallest', function(){

    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.smallest(arr));
    });

    it ('it should return 3 when the array is [7,3,9]', function(){
        let arr =[7,3,9];
        assert.equal(functions.smallest(arr),3);
    });

    it ('it should return -5 when the array is [-1,9,-5]', function(){
        let arr =[-1,9,-5];
        assert.equal(functions.smallest(arr),-5);
    });
});

describe('largest', function(){

    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.largest(arr));
    });

    it ('it should return 9 when the array is [7,3,9]', function(){
        let arr =[7,3,9];
        assert.equal(functions.largest(arr),9);
    });

    it ('it should return 0 when the array is [0,-5,-1]', function(){
        let arr =[0,-5,-1];
        assert.equal(functions.largest(arr),0);
    });
});


describe('merge', function(){

    it('it should return null when both the arrays are empty', function(){
        let arr1 = [];
        let arr2 = [];
        assert.isNull(functions.merge(arr1,arr2));
    });

    it('it should return [2,8] when arrays are [2,8] and [] ', function(){
        let arr1 = [2,8];
        let arr2 = [];
        assert.deepEqual(functions.merge(arr1,arr2), [2,8]);
    });

    it('it should return [2,8,7,-3,1] when merging [2,7,1] and [8,-3]', function(){
        let arr1 = [2,7,1];
        let arr2 = [8,-3];
        assert.deepEqual(functions.merge(arr1,arr2), [2,8,7,-3,1]);
    });
});