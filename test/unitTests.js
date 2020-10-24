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