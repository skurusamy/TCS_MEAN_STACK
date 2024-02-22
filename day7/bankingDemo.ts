// Create BankAccount class
// Allow constructor function to take balance. default to zero if not num
// Deposit (amount) 
// Withdrawal (amount) 
// printBalance () You're account balance is $100.

class BankAccount {
    _balance:any; //added
    balanceUpdatedAt:Date;//added
    constructor (balance) {
        this._balance = typeof balance === 'number' ? balance : 0;
    }
    set balance (val) {
        this._balance = val;
        this.balanceUpdatedAt = new Date();
    }
    get balance () {
        return this._balance;
    }
    deposit (amount) {
        if (typeof amount === 'number') {
            this.balance += amount;
            return true;
        } else {
            console.log('Amount must be a number');
            return false;
        }
    }
    withdrawal (amount) {
        if (typeof amount === 'number') {
            this.balance -= amount;
            return this.balance;
        } else {
            console.log('Amount must be a number');
            return false;
        }
    }
    printBalance () {
        console.log(`Your balance is $${this.balance}! Last update at ${this.balanceUpdatedAt}.`);
        /*constructor (balance) {
        this.balance = typeof balance === 'number' ? balance : 0;*/
    }
    /*set balance (val) {
        this._balance = val;
        this.balanceUpdatedAt = new Date();
    }
    get balance () {
        return this._balance;
    }
    deposit (amount) {
        if (typeof amount === 'number') {
            this.balance += amount;
            return true;
        } else {
            console.log('Amount must be a number');
            return false;
        }
    }
    withdrawal (amount) {
        if (typeof amount === 'number') {
            this.balance -= amount;
            return this.balance;
        } else {
            console.log('Amount must be a number');
            return false;
        }
    }
    printBalance () {
        console.log(`Your balance is $${this.balance}! Last update at ${this.balanceUpdatedAt}.`);
        constructor (balance) {
        this.balance = typeof balance === 'number' ? balance : 0;
    }
    set balance (val) {
        this._balance = val;
        this.balanceUpdatedAt = new Date();
    }
    get balance () {
        return this._balance;
    }
    deposit (amount) {
        if (typeof amount === 'number') {
            this.balance += amount;
            return true;
        } else {
            console.log('Amount must be a number');
            return false;
        }
    }
    withdrawal (amount) {
        if (typeof amount === 'number') {
            this.balance -= amount;
            return this.balance;
        } else {
            console.log('Amount must be a number');
            return false;
        }
    }
    printBalance () {
        console.log(`Your balance is $${this.balance}! Last update at ${this.balanceUpdatedAt}.`);
    }*/
}
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