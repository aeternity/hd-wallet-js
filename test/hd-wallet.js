/*
 * ISC License (ISC)
 * Copyright 2018 aeternity developers
 *
 *  Permission to use, copy, modify, and/or distribute this software for any
 *  purpose with or without fee is hereby granted, provided that the above
 *  copyright notice and this permission notice appear in all copies.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 *  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 *  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 *  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 *  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 *  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 *  PERFORMANCE OF THIS SOFTWARE.
 */

import { describe, it } from 'mocha'
import { expect } from 'chai'
import { generateHDWallet, getHDWalletAccounts } from '../src/hd-wallet'
import { hex } from './utils'

describe('hd-wallet', () => {
  const testSeed = hex`1a2b7b6c526499f0b51e8fba605485bb14b39836727668f393c16e6eb3c3cf83e6ae43919410e57e73d3934d96abd3e3d99750e5c4c0d12c47286aeadf14a33b`
  const testHDWallet = {
    chainCode: hex`5d92f8e442884222def6ffe9918dfb067dc68aa2d7679bf6848c9aea5940d103`,
    privateKey: hex`23596ba3f00d7c42ae0546a5d06968fbe0f969b91c14b2088a14c32dc0bc9773`
  }
  const testAccounts = [{
    publicKey: hex`f75e53f57822227a58b463095d6dab657cab804574be62de0be1f95279d09037`,
    secretKey: hex`87abcb9c765f3259cf448542cae4c2e9bbff2ad2588693239fd7ca00b17fd463f75e53f57822227a58b463095d6dab657cab804574be62de0be1f95279d09037`
  }, {
    publicKey: hex`1d7ce9bcf06e93c844c02489862b623c23b14a7364350a36336c87bc76b6650a`,
    secretKey: hex`e78fdb3c2600a0684906adfcb5fac33167576dcb099580bde000bc5a363c939c1d7ce9bcf06e93c844c02489862b623c23b14a7364350a36336c87bc76b6650a`
  }]

  describe('generateHDWallet', () =>
    it('generates extended wallet key', () =>
      expect(generateHDWallet(testSeed)).to.eql(testHDWallet)))

  describe('getHDWalletAccounts', () =>
    it('generates array of accounts', () =>
      expect(getHDWalletAccounts(testHDWallet, 2)).to.eql(testAccounts)))
})
