import { expect } from 'chai'
import { parseFn } from '../src/dhruv'

const parsed = parseFn(`${__dirname}/../src/calculator.js`)

describe('Calculator Functions', () => {
    describe('sum()', () => {
        it('should return the sum of two numbers', () => {
            let a = parsed.find('sum').callWith(1, 2).result
            expect(a).to.equal(3)
        });
        it('should return the sum of two negative numbers', () => {
            let a = parsed.find('sum').callWith(-1, 2).result
            expect(a).to.equal(1)
        });
    });
    describe('mul()', () => {
        it('should return the mul of two numbers', () => {
            let a = parsed.find('mul').callWith(5, 7).result
            expect(a).to.equal(35)
        });
        it('should return the mul of two negative numbers', () => {
            let a = parsed.find('mul').callWith(-2, 3).result
            expect(a).to.equal(-6)
        });
    });
    
    describe('sumAsync()', () => {
        it('should return the sumAsync of two numbers', async () => {
            let a = await parsed.find('sumAsync').callWith(5, 7).result
            expect(a).to.equal(12)
        });
    });

    describe('doTaxes1()', () => {
        it('should return the doTaxes1', async () => {
            let a = await parsed.find('doTaxes1')
                .reDeclare('taxService', `5`)
                .reDeclare('taxes', `5`)
                .callWith(5).result
            expect(a).to.equal(5)
        });
    });
    describe('doTaxes2()', () => {
        it('should return the doTaxes', async () => {
            let e = await parsed.find('doTaxes2')
                .reDeclare('taxService', `5`)
                .reDeclare('logResult', `5`)
                .reDeclare('taxesResult', `undefined`)
                .callWith(5)
                .result
            expect(e).to.equal(null)
        });
    });
    describe('throwUndefined()', () => {
        it('should return the throwUndefined', async () => {
            let e = await parsed.find('throwUndefined')
                .reDeclare('foo', `undefined`)
                .callWith(5).exception
            expect(!!e).to.equal(true)
        });
    });
});