export const ratingAddress = "0x30f839599dDc8c986A1a2E085700BAEC59B9e6d2";

export const ratingAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "place",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "state",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "specialization",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "imageHash",
				"type": "string"
			}
		],
		"name": "createHospital",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "hId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "_star",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_review",
				"type": "string"
			}
		],
		"name": "createRating",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "hId",
				"type": "uint256"
			}
		],
		"name": "getCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "hId",
				"type": "uint256"
			}
		],
		"name": "getHospital",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "place",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "state",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "specialization",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "imageHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "points",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "time",
								"type": "uint256"
							},
							{
								"internalType": "uint8",
								"name": "star",
								"type": "uint8"
							},
							{
								"internalType": "string",
								"name": "review",
								"type": "string"
							}
						],
						"internalType": "struct RatingContract.Rating[]",
						"name": "reviewList",
						"type": "tuple[]"
					}
				],
				"internalType": "struct RatingContract.Hospital",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHospitalList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "place",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "state",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "specialization",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "imageHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "points",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "count",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "time",
								"type": "uint256"
							},
							{
								"internalType": "uint8",
								"name": "star",
								"type": "uint8"
							},
							{
								"internalType": "string",
								"name": "review",
								"type": "string"
							}
						],
						"internalType": "struct RatingContract.Rating[]",
						"name": "reviewList",
						"type": "tuple[]"
					}
				],
				"internalType": "struct RatingContract.Hospital[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "hId",
				"type": "uint256"
			}
		],
		"name": "getPoints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];