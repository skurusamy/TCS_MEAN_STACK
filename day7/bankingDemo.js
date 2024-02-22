// Create BankAccount class
// Allow constructor function to take balance. default to zero if not num
// Deposit (amount) 
// Withdrawal (amount) 
// printBalance () You're account balance is $100.
var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this._balance = typeof balance === 'number' ? balance : 0;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            this._balance = val;
            this.balanceUpdatedAt = new Date();
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.prototype.deposit = function (amount) {
        if (typeof amount === 'number') {
            this.balance += amount;
            return true;
        }
        else {
            console.log('Amount must be a number');
            return false;
        }
    };
    BankAccount.prototype.withdrawal = function (amount) {
        if (typeof amount === 'number') {
            this.balance -= amount;
            return this.balance;
        }
        else {
            console.log('Amount must be a number');
            return false;
        }
    };
    BankAccount.prototype.printBalance = function () {
        console.log("Your balance is $" + this.balance + "! Last update at " + this.balanceUpdatedAt + ".");
        /*constructor (balance) {
        this.balance = typeof balance === 'number' ? balance : 0;*/
    };
    return BankAccount;
}());
console.log("Account1:");
var account = new BankAccount(100);
account.deposit(100);
account.withdrawal(10);
account.printBalance();
console.log("Account2:");
var account2 = new BankAccount(';ljasdf');
account2.deposit('andrew');
account2.withdrawal(true);
account2.printBalance();
//Accessors are only available when targeting ECMAScript 5 and higher. -- error
//use tsc -t es5 bankingDemo.ts
