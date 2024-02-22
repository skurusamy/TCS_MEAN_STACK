// Create BankAccount class
// Allow constructor function to take balance. default to zero if not num
// Deposit (amount) 
// Withdrawal (amount) 
// printBalance () You're account balance is $100.

class BankAccount1 {
    balanceUpdatedAt: Date;
    
    constructor (balance) {
        this.balance = typeof balance === 'number' ? balance : 0;
    }
    set balance (val) {
        this.balance = val;
        
    }
    get balance () {
        return this.balance;
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
        this.balance = typeof this.balance === 'number' ? this.balance : 0;
    }
}

var accoun = new BankAccount1(100);
accoun.deposit(100);
accoun.withdrawal(10);
accoun.printBalance();

var account3 = new BankAccount1(';ljasdf');
account3.deposit('andrew');
account3.withdrawal(true);
account3.printBalance();