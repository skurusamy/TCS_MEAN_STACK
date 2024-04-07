console.log('starting password manager');

var crypto = require('crypto-js')
var storage = require('node-persist');
const { string } = require('yargs');
storage.initSync();

var argv = require('yargs')
	.command('create', 'Create a new account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name (eg: Twitter, Facebook)',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Account username or email',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Account password',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'Get an existing account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name (eg: Twitter, Facebook)',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.command('addProject','Adding new Project',function(yargs){
		yargs.option({
			projectName:{
				demand:true,
				alias:'n',
				description: 'Project Name',
				type:'string'
			},
			location :{
				demand:true,
				alias:'l',
				description: 'location',
				type:'string'
			},
			city:{
				demand:true,
				alias:'c',
				description: 'City Name',
				type:'string'
			},
			title:{
				demand:true,
				alias:'t',
				description: 'Project title',
				type:'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help')
	})
	.command('getProject','Retriving project details',function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Project Name',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master password',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

 
function getAccounts (masterPassword) {
	// use getItemSync to fetch accounts
	var encryptedAccount = storage.getItemSync('accounts');
	var accounts = [];

	// decrypt
	if (typeof encryptedAccount !== 'undefined') {
		var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
		accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}

	// return accounts array
	return accounts;
}
function getProjects (masterPassword) {
	// use getItemSync to fetch accounts
	var encryptedAccount = storage.getItemSync('projects');
	var projects = [];

	// decrypt
	if (typeof encryptedAccount !== 'undefined') {
		var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
		projects = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}

	// return accounts array
	return projects;
}

function saveAccounts (accounts, masterPassword) {
	// encrypt accounts
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	
	// setItemSync
	storage.setItemSync('accounts', encryptedAccounts.toString());
	
	// return accounts
	return accounts;
}

function createAccount (account, masterPassword) {
	var accounts = getAccounts(masterPassword);

	accounts.push(account);

	saveAccounts(accounts, masterPassword);

	return account;
}

function getAccount (accountName, masterPassword) {
	var accounts = getAccounts(masterPassword)
	var matchedAccount;

	accounts.forEach(function (account) {
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

function saveProject (projects, masterPassword) {
	// encrypt accounts
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(projects), masterPassword);
	
	// setItemSync
	storage.setItemSync('projects', encryptedAccounts.toString());
	
	// return accounts
	return projects;
}

function addProject(project, masterPassword) {
	var projects = getProjects(masterPassword);

	projects.push(project);

	saveProject(projects, masterPassword);

	return project;
}

function getProject (projectName, masterPassword) {
	var projects = getProjects(masterPassword)
	var matchedProject;

	projects.forEach(function (project) {
		if (project.name === projectName) {
			matchedProject = project;
		}
	});

	return matchedProject;
}

if (command === 'create') {
	try {
		var createdAccount = createAccount({
			name: argv.name,
			username: argv.username,
			password: argv.password
		}, argv.masterPassword);
		console.log('Account created!');
		console.log(createdAccount);
	} catch (e) {
		console.log('Unable to create account.');
	}
} else if (command === 'get') {
	try {
		var fetchedAccount = getAccount(argv.name, argv.masterPassword);

		if (typeof fetchedAccount === 'undefined') {
			console.log('Account not found');
		} else {
			console.log('Account found!');
			console.log(fetchedAccount);
		}
	} catch (e) {
		console.log('Unable to fetch account.');
	}
}
else if (command === 'addProject') {
	try {
		var createdAccount = addProject({
			projectName: argv.projectName,
			location: argv.location,
			city: argv.city,
			title:argv.title
		}, argv.masterPassword);
		console.log('Project Created!');
		console.log(createdAccount);
	} catch (e) {
		console.log('Unable to create project.');
	}
}else if (command === 'getProject') {
	try {
		var fetchedAccount = getProject(argv.projectName, argv.masterPassword);

		if (typeof fetchedAccount === 'undefined') {
			console.log('Project not found');
		} else {
			console.log('project found!');
			console.log(fetchedAccount);
		}
	} catch (e) {
		console.log('Unable to fetch project.');
	}
}

