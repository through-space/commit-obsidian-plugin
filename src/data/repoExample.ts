export const repoExample = {
	"branches": {
		"branchID_1": {
			"name": "main"
		},
		"branchID_2": {
			"name": "mind",
			"value": 10,
			"commitType": "atLeastOne"
		},
		"branchID_3": {
			"name": "read",
			"value": 4,
			"commitType": "sum"
		}
	},
	"structure": {
		"branchID_1": {
			"connections": [
				{
					"type": "CHILD",
					"branchName": "branchID_2"
				}
			]
		}
	}
}
