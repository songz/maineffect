import { expect } from 'chai'
import { parseFn } from '../src/maineffect'

const parsed = parseFn(`${__dirname}/../src/examples/basic.js`)

describe('Basic Functions', () => {
    describe('sum()', () => {
        it('should return the sum of two numbers', () => {
            const result = parsed.find('sum')
                            .callWith(51, 82)
                            .result
            expect(result).to.equal(133)
        })
    })
    describe('sumAsync()', () => {
        it('should return the sum of two numbers', async () => {
            const result = await parsed.find('sumAsync')
                                .callWith(51, 82)
                                .result
            expect(result).to.equal(133)
        })
    })
    describe('pitcher()', () => {
        it('should throw an error with the argument as message', () => {
            const result = parsed.find('pitcher')
                                .callWith('foo')
                                .exception
            expect(result.message).to.equal('foo')
        })
    })
    describe('pitcherAsync()', () => {
        it('should throw an error with the argument as message', async () => {
            try {
                await parsed.find('pitcherAsync')
                                .callWith('foo')
            } catch(e) {
                expect(e.message).to.equal('foo')
            }
        })
    })
})
