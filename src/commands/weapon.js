const weaponDB = require('../database/equipmentdb.json').weapon;

function weaponTypeInputToString(weaponType) {
	let weaponTypeString = '';
	if (weaponType === 1) {
		weaponTypeString = 'Gun';
	}
	if (weaponType === 2) {
		weaponTypeString = 'Katana';
	}
	if (weaponType === 3) {
		weaponTypeString = 'Cannon';
	}
	if (weaponType === 4) {
		weaponTypeString = 'Greatsword';
	}
	if (weaponType === 5) {
		weaponTypeString = 'Cross';
	}
	if (weaponType === 6) {
		weaponTypeString = 'Gauntlet';
	}
	if (weaponType === 7) {
		weaponTypeString = 'Scythe';
	}
	return weaponTypeString.toLowerCase();
}

function weaponMenu(page, rarity, weaponType, msg) {
	const currentPage = page;
	const currentRarity = rarity;
	const currentWeaponType = weaponType;
	let titleForEmbed = '';
	let authorImageAttachmentForEmbed = '';
	let selectedWeapon = [];

	for (i = 0; i < weaponDB.length; i++) {
		if (weaponDB[i]['rarity'] === rarity && weaponDB[i]['type'] === weaponTypeInputToString(weaponType).toLowerCase()) {
			selectedWeapon.push(weaponDB[i]);
		}
	}

	if (rarity === 4) {
		if (weaponType === 1) {
			titleForEmbed = '4★ Gun';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
		}
		if (weaponType === 2) {
			titleForEmbed = '4★ Katana';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
		}
		if (weaponType === 3) {
			titleForEmbed = '4★ Cannon';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
		}
		if (weaponType === 4) {
			titleForEmbed = '4★ Greatsword';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
		}
		if (weaponType === 5) {
			titleForEmbed = '4★ Cross';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
		}
		if (weaponType === 6) {
			titleForEmbed = '4★ Gauntlet';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
		}
		if (weaponType === 7) {
			titleForEmbed = '4★ Scythe';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
		}
	}

	if (rarity === 3) {
		if (weaponType === 1) {
			titleForEmbed = '3★ Gun';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
		}
		if (weaponType === 2) {
			titleForEmbed = '3★ Katana';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
		}
		if (weaponType === 3) {
			titleForEmbed = '3★ Cannon';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
		}
		if (weaponType === 4) {
			titleForEmbed = '3★ Greatsword';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
		}
		if (weaponType === 5) {
			titleForEmbed = '3★ Cross';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
		}
		if (weaponType === 6) {
			titleForEmbed = '3★ Gauntlet';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
		}
		if (weaponType === 7) {
			titleForEmbed = '3★ Scythe';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
		}
	}

	if (rarity === 2) {
		if (weaponType === 1) {
			titleForEmbed = '2★ Gun';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
		}
		if (weaponType === 2) {
			titleForEmbed = '2★ Katana';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
		}
		if (weaponType === 3) {
			titleForEmbed = '2★ Cannon';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
		}
		if (weaponType === 4) {
			titleForEmbed = '2★ Greatsword';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
		}
		if (weaponType === 5) {
			titleForEmbed = '2★ Cross';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
		}
		if (weaponType === 6) {
			titleForEmbed = '2★ Gauntlet';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
		}
		if (weaponType === 7) {
			titleForEmbed = '2★ Scythe';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
		}
	}

	if (rarity === 1) {
		if (weaponType === 1) {
			titleForEmbed = '1★ Gun';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
		}
		if (weaponType === 2) {
			titleForEmbed = '1★ Katana';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
		}
		if (weaponType === 3) {
			titleForEmbed = '1★ Cannon';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
		}
		if (weaponType === 4) {
			titleForEmbed = '1★ Greatsword';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
		}
		if (weaponType === 5) {
			titleForEmbed = '1★ Cross';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
		}
		if (weaponType === 6) {
			titleForEmbed = '1★ Gauntlet';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
		}
		if (weaponType === 7) {
			titleForEmbed = '1★ Scythe';
			authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
		}
	}

	const weaponArrayName = [];
	const weaponArrayWhole = [];
	for (let i = 0; i < selectedWeapon.length; i++) {
		weaponArrayName.push(selectedWeapon[i]['name']);
		weaponArrayWhole.push(selectedWeapon[i]);
	}
	const weaponArrayNameTemp = weaponArrayName;

	for (let i = 0; i < page; i++) {
		weaponArrayNameTemp.splice(0, 9);
		weaponArrayWhole.splice(0, 9);
	}

	const reactionNumberArray = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];

	let embedWeaponNames = '';
	if (weaponArrayNameTemp.length > 9) {
		for (let i = 0; i < 9; i++) {
			embedWeaponNames += `${i + 1}. ${weaponArrayNameTemp[i]}\n`;
		}
	} else {
		for (let i = 0; i < weaponArrayNameTemp.length; i++) {
			embedWeaponNames += `${i + 1}. ${weaponArrayNameTemp[i]}\n`;
		}
	}

	const totalPageNumber = Math.floor(selectedWeapon.length / 9) + 1;
	const currentPageDisplay = currentPage + 1;

	let embed = {
		author: {
			name: titleForEmbed,
			icon_url: `attachment://${authorImageAttachmentForEmbed.replace('src/images/equipment/weapon/', '')}`,
		},
		color: 6332693,
		title: 'Select a weapon',
		thumbnail: {
			url: `attachment://${authorImageAttachmentForEmbed.replace('src/images/equipment/weapon/', '')}`,
		},
		footer: {
			icon_url: 'attachment://attentionicon.PNG',
			text: `Page ${currentPageDisplay} of ${totalPageNumber} | Please press the number below (reaction) to select`,
		},
		fields: [{
			name: '----------------',
			value: `${embedWeaponNames}`,
		}],
	};
	msg.reply({
		embed,
		files: [{
			attachment: authorImageAttachmentForEmbed,
			name: authorImageAttachmentForEmbed.replace('src/images/equipment/weapon/', ''),
		}, {
			attachment: 'src/images/attentionicon.PNG',
			name: 'attentionicon.PNG',
		}],
	}).then(async (newMessage) => {
		const filter = (reaction, user) =>
			user.id === msg.author.id &&
			reaction.emoji.name === '◀' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '1⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '2⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '3⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '4⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '5⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '6⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '7⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '8⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '9⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '▶' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '❌';
		const collector = newMessage.createReactionCollector(filter, {
			time: 30000
		});
		newMessage.delete(30000).catch(() => {});
		collector.once('collect', async (reaction) => {
			const chosen = reaction.emoji.name;
			if (chosen === '◀') {
				newMessage.delete();
				if (currentPage === 0) {
					msg.reply('please do not add reaction by yourself.');
				} else {
					weaponMenu(currentPage - 1, currentRarity, currentWeaponType, msg);
				}
			}

			if (chosen === '▶') {
				newMessage.delete();
				if (weaponArrayWhole.length <= 9) {
					msg.reply('please do not add reaction by yourself.');
				} else {
					weaponMenu(currentPage + 1, currentRarity, currentWeaponType, msg);
				}
			}

			for (let i = 0; i < 9; i++) {
				const emoji = reactionNumberArray[i];
				if (chosen === emoji) {
					newMessage.delete();
					if (weaponArrayWhole.length < 1) {
						msg.reply('please do not add reaction by yourself.');
					} else {
						let field1 = '';
						let field2 = '';

						if (weaponArrayWhole[i][1] !== '-') {
							field1 = {
								name: weaponArrayWhole[i]['skillonetitle'],
								value: weaponArrayWhole[i]['skillonedetail'],
							};
						} else {
							field1 = {
								name: 'Skill',
								value: 'None',
							};
						}

						if (weaponArrayWhole[i][3] !== '-') {
							field2 = {
								name: weaponArrayWhole[i]['skilltwotitle'],
								value: weaponArrayWhole[i]['skilltwodetail'],
							};
						} else {
							field2 = {
								name: 'Skill',
								value: 'None',
							};
						}

						embed = {
							author: {
								name: titleForEmbed,
								icon_url: `attachment://${authorImageAttachmentForEmbed.replace('src/images/equipment/weapon/', '')}`,
							},
							color: 6332693,
							title: weaponArrayWhole[i]['name'],
							thumbnail: {
								url: weaponArrayWhole[i]['image'],
							},
							footer: {
								icon_url: 'attachment://attentionicon.PNG',
								text: 'All information from http://houkai3rd.arthobbylab.com/',
							},
							fields: [{
								name: 'Attack',
								value: weaponArrayWhole[i]['attack'],
								inline: true,
							}, {
								name: 'Critical',
								value: weaponArrayWhole[i]['critical'],
								inline: true,
							}, field1, field2],
						};
						msg.reply({
							embed,
							files: [{
								attachment: authorImageAttachmentForEmbed,
								name: authorImageAttachmentForEmbed.replace('src/images/equipment/weapon/', ''),
							}, {
								attachment: 'src/images/attentionicon.PNG',
								name: 'attentionicon.PNG',
							}],
						});
					}
				}
			}

			if (chosen === '❌') {
				newMessage.delete();
			}
			collector.stop();
		});

		if (page > 0) {
			await newMessage.react('◀').catch(() => {});
		}

		if (weaponArrayNameTemp.length > 9) {
			await newMessage.react('▶').catch(() => {});
		}

		if (weaponArrayNameTemp.length <= 9) {
			for (let i = 0; i < weaponArrayNameTemp.length; i++) {
				await newMessage.react(reactionNumberArray[i]).catch(() => {});
			}
		} else {
			for (let i = 0; i < 9; i++) {
				await newMessage.react(reactionNumberArray[i]).catch(() => {});
			}
		}

		await newMessage.react('❌').catch(() => {});

	});
}

function weaponRarity(weaponType, msg) {

	let weaponTypeString = weaponTypeInputToString(weaponType);
	
	const embed = {
		author: {
			name: weaponTypeString,
		},
		color: 6332693,
		title: 'Select rarity',
		footer: {
			icon_url: 'attachment://attentionicon.PNG',
			text: 'Please press the number below (reaction) to select',
		},
		fields: [{
			name: '----------------',
			value: '1. ★★★★☆\n2. ★★★☆\n3. ★★☆\n4. ★☆',
		}],
	};
	msg.reply({
		embed,
		files: [{
			attachment: 'src/images/attentionicon.PNG',
			name: 'attentionicon.PNG',
		}],
	}).then(async (newMessage) => {
		const filter = (reaction, user) =>
			user.id === msg.author.id &&
			reaction.emoji.name === '1⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '2⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '3⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '4⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '▶' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '❌';
		const collector = newMessage.createReactionCollector(filter, {
			time: 30000
		});
		newMessage.delete(30000).catch(() => {});
		collector.once('collect', async (reaction) => {
			const chosen = reaction.emoji.name;
			if (chosen === '1⃣') {
				newMessage.delete();
				weaponMenu(0, 4, weaponType, msg);
			} else if (chosen === '2⃣') {
				newMessage.delete();
				weaponMenu(0, 3, weaponType, msg);
			} else if (chosen === '3⃣') {
				if (weaponType !== 7) {
					weaponMenu(0, 2, weaponType, msg);
				} else {
					msg.reply('There is no 2★ Scythe');
				}
				newMessage.delete();
			} else if (chosen === '4⃣') {
				newMessage.delete();
				if (weaponType !== 6) {
					weaponMenu(0, 1, weaponType, msg);
				} else {
					msg.reply('There is no 1★ Gauntlet');
				}
			} else if (chosen === '❌') {
				newMessage.delete();
			}
			collector.stop();
		});
		await newMessage.react('1⃣').catch(() => {});
		await newMessage.react('2⃣').catch(() => {});
		await newMessage.react('3⃣').catch(() => {});
		await newMessage.react('4⃣').catch(() => {});
		await newMessage.react('❌').catch(() => {});
	});
}

function weaponList(msg) {
	const embed = {
		author: {
			name: 'Weapon List',
		},
		color: 6332693,
		title: 'Please select a weapon type',
		footer: {
			icon_url: 'attachment://attentionicon.PNG',
			text: 'Please press the number below (reaction) to select',
		},
		fields: [{
			name: '----------------',
			value: '1. Gun\n2. Katana\n3. Cannon\n4. Greatsword\n5. Cross\n6. Gauntlet\n7. Scythe',
		}],
	};

	msg.reply({
		embed,
		files: [{
			attachment: 'src/images/attentionicon.PNG',
			name: 'attentionicon.PNG',
		}],
	}).then(async (newMessage) => {
		const filter = (reaction, user) =>
			user.id === msg.author.id &&
			reaction.emoji.name === '1⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '2⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '3⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '4⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '5⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '6⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '7⃣' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '▶' ||
			user.id === msg.author.id &&
			reaction.emoji.name === '❌';
		const collector = newMessage.createReactionCollector(filter, {
			time: 30000
		});
		newMessage.delete(30000).catch(() => {});
		collector.once('collect', async (reaction) => {
			const chosen = reaction.emoji.name;
			if (chosen === '1⃣') {
				newMessage.delete();
				weaponRarity(1, msg);
			} else if (chosen === '2⃣') {
				newMessage.delete();
				weaponRarity(2, msg);
			} else if (chosen === '3⃣') {
				newMessage.delete();
				weaponRarity(3, msg);
			} else if (chosen === '4⃣') {
				newMessage.delete();
				weaponRarity(4, msg);
			} else if (chosen === '5⃣') {
				newMessage.delete();
				weaponRarity(5, msg);
			} else if (chosen === '6⃣') {
				newMessage.delete();
				weaponRarity(6, msg);
			} else if (chosen === '7⃣') {
				newMessage.delete();
				weaponRarity(7, msg);
			} else if (chosen === '❌') {
				newMessage.delete();
			}
			collector.stop();
		});
		await newMessage.react('1⃣').catch(() => {});
		await newMessage.react('2⃣').catch(() => {});
		await newMessage.react('3⃣').catch(() => {});
		await newMessage.react('4⃣').catch(() => {});
		await newMessage.react('5⃣').catch(() => {});
		await newMessage.react('6⃣').catch(() => {});
		await newMessage.react('7⃣').catch(() => {});
		await newMessage.react('❌').catch(() => {});
	});
}

function weaponSearch(msg) {
	const query = msg.content.substr(msg.content.indexOf(' ') + 1);
	if (query.length <= 2) {
		msg.reply('Please search with atleast 3 characters!');
	} else {
		const queryConvertedEscapes = query.replace(/[^a-zA-Z0-9]/g, ' ');
		const queryConvertedSpace = queryConvertedEscapes.replace(/ /g, ')(?=.*');
		const queryConvertedBeginningEnd = `${queryConvertedSpace.replace(/^/g, '(?=.*')})`;

		const regex = new RegExp(queryConvertedBeginningEnd, 'i');
		const indexes = [];
		for (let i = 0; i < weaponDB.length; i++) {
			if (JSON.stringify(weaponDB[i].name).match(regex)) {
				indexes.push(i);
			}
		}
		const result = [];
		for (let i = 0; i < indexes.length; i++) {
			result.push(weaponDB[indexes[i]]);
		}

		if (result.length < 2 && result.length > 0) {
			let field1 = '';
			let field2 = '';

			if (weaponDB[indexes[0]].skillonetitle !== '-') {
				field1 = {
					name: weaponDB[indexes[0]].skillonetitle,
					value: weaponDB[indexes[0]].skillonedetail,
				};
			} else {
				field1 = {
					name: 'Skill',
					value: 'None',
				};
			}

			if (weaponDB[indexes[0]].skilltwotitle !== '-') {
				field2 = {
					name: weaponDB[indexes[0]].skilltwotitle,
					value: weaponDB[indexes[0]].skilltwodetail,
				};
			} else {
				field2 = {
					name: 'Skill',
					value: 'None',
				};
			}

			let titleForEmbed = '';
			let authorImageAttachmentForEmbed = '';

			if (weaponDB[indexes[0]].type === 'gun') {
				if (weaponDB[indexes[0]].rarity === 4) {
					titleForEmbed = '4★ Gun';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 3) {
					titleForEmbed = '3★ Gun';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 2) {
					titleForEmbed = '2★ Gun';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 1) {
					titleForEmbed = '1★ Gun';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
				}
			}

			if (weaponDB[indexes[0]].type === 'katana') {
				if (weaponDB[indexes[0]].rarity === 4) {
					titleForEmbed = '4★ Katana';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 3) {
					titleForEmbed = '3★ Katana';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 2) {
					titleForEmbed = '2★ Katana';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 1) {
					titleForEmbed = '1★ Katana';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
				}
			}

			if (weaponDB[indexes[0]].type === 'cannon') {
				if (weaponDB[indexes[0]].rarity === 4) {
					titleForEmbed = '4★ Cannon';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 3) {
					titleForEmbed = '3★ Cannon';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 2) {
					titleForEmbed = '2★ Cannon';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 1) {
					titleForEmbed = '1★ Cannon';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
				}
			}

			if (weaponDB[indexes[0]].type === 'greatsword') {
				if (weaponDB[indexes[0]].rarity === 4) {
					titleForEmbed = '4★ Greatsword';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 3) {
					titleForEmbed = '3★ Greatsword';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 2) {
					titleForEmbed = '2★ Greatsword';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 1) {
					titleForEmbed = '1★ Greatsword';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
				}
			}

			if (weaponDB[indexes[0]].type === 'cross') {
				if (weaponDB[indexes[0]].rarity === 4) {
					titleForEmbed = '4★ Cross';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 3) {
					titleForEmbed = '3★ Cross';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 2) {
					titleForEmbed = '2★ Cross';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 1) {
					titleForEmbed = '1★ Cross';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
				}
			}

			if (weaponDB[indexes[0]].type === 'gauntlet') {
				if (weaponDB[indexes[0]].rarity === 4) {
					titleForEmbed = '4★ Gauntlet';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 3) {
					titleForEmbed = '3★ Gauntlet';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 2) {
					titleForEmbed = '2★ Gauntlet';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 1) {
					titleForEmbed = '1★ Gauntlet';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
				}
			}

			if (weaponDB[indexes[0]].type === 'scythe') {
				if (weaponDB[indexes[0]].rarity === 4) {
					titleForEmbed = '4★ Scythe';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 3) {
					titleForEmbed = '3★ Scythe';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 2) {
					titleForEmbed = '2★ Scythe';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
				}
				if (weaponDB[indexes[0]].rarity === 1) {
					titleForEmbed = '1★ Scythe';
					authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
				}
			}

			const embed = {
				author: {
					name: titleForEmbed,
					icon_url: `attachment://${authorImageAttachmentForEmbed.replace('src/images/equipment/weapon/', '')}`,
				},
				color: 6332693,
				title: weaponDB[indexes[0]].name,
				thumbnail: {
					url: weaponDB[indexes[0]].image,
				},
				footer: {
					icon_url: 'attachment://attentionicon.PNG',
					text: 'All information from http://houkai3rd.arthobbylab.com/',
				},
				fields: [{
					name: 'Attack',
					value: weaponDB[indexes[0]].attack,
					inline: true,
				}, {
					name: 'Critical',
					value: weaponDB[indexes[0]].critical,
					inline: true,
				}, field1, field2],
			};
			msg.reply({
				embed,
				files: [{
					attachment: authorImageAttachmentForEmbed,
					name: authorImageAttachmentForEmbed.replace('src/images/equipment/weapon/', ''),
				}, {
					attachment: 'src/images/attentionicon.PNG',
					name: 'attentionicon.PNG',
				}],
			});
		} else if (result.length > 1 && result.length < 10) {
			const reactionNumberArray = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣'];
			let embedWeaponNames = '';
			let titleForEmbed = '';
			let authorImageAttachmentForEmbed = '';

			for (let i = 0; i < result.length; i++) {
				if (weaponDB[indexes[i]].type === 'gun') {
					if (weaponDB[indexes[i]].rarity === 4) {
						titleForEmbed = '4★ Gun';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 3) {
						titleForEmbed = '3★ Gun';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 2) {
						titleForEmbed = '2★ Gun';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 1) {
						titleForEmbed = '1★ Gun';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
					}
				}

				if (weaponDB[indexes[i]].type === 'katana') {
					if (weaponDB[indexes[i]].rarity === 4) {
						titleForEmbed = '4★ Katana';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 3) {
						titleForEmbed = '3★ Katana';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 2) {
						titleForEmbed = '2★ Katana';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 1) {
						titleForEmbed = '1★ Katana';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
					}
				}

				if (weaponDB[indexes[i]].type === 'cannon') {
					if (weaponDB[indexes[i]].rarity === 4) {
						titleForEmbed = '4★ Cannon';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 3) {
						titleForEmbed = '3★ Cannon';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 2) {
						titleForEmbed = '2★ Cannon';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 1) {
						titleForEmbed = '1★ Cannon';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
					}
				}

				if (weaponDB[indexes[i]].type === 'greatsword') {
					if (weaponDB[indexes[i]].rarity === 4) {
						titleForEmbed = '4★ Greatsword';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 3) {
						titleForEmbed = '3★ Greatsword';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 2) {
						titleForEmbed = '2★ Greatsword';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 1) {
						titleForEmbed = '1★ Greatsword';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
					}
				}

				if (weaponDB[indexes[i]].type === 'cross') {
					if (weaponDB[indexes[i]].rarity === 4) {
						titleForEmbed = '4★ Cross';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 3) {
						titleForEmbed = '3★ Cross';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 2) {
						titleForEmbed = '2★ Cross';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 1) {
						titleForEmbed = '1★ Cross';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
					}
				}

				if (weaponDB[indexes[i]].type === 'gauntlet') {
					if (weaponDB[indexes[i]].rarity === 4) {
						titleForEmbed = '4★ Gauntlet';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 3) {
						titleForEmbed = '3★ Gauntlet';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 2) {
						titleForEmbed = '2★ Gauntlet';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 1) {
						titleForEmbed = '1★ Gauntlet';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
					}
				}

				if (weaponDB[indexes[i]].type === 'scythe') {
					if (weaponDB[indexes[i]].rarity === 4) {
						titleForEmbed = '4★ Scythe';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 3) {
						titleForEmbed = '3★ Scythe';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 2) {
						titleForEmbed = '2★ Scythe';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
					}
					if (weaponDB[indexes[i]].rarity === 1) {
						titleForEmbed = '1★ Scythe';
						authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
					}
				}
				embedWeaponNames += `${i + 1}. ${weaponDB[indexes[i]].name} (${titleForEmbed})\n`;
			}
			let embed = {
				author: {
					name: 'Weapon search result',
				},
				color: 6332693,
				title: 'Select a weapon',
				footer: {
					icon_url: 'attachment://attentionicon.PNG',
					text: 'Please press the number below (reaction) to select',
				},
				fields: [{
					name: '----------------',
					value: `${embedWeaponNames}`,
				}],
			};
			msg.reply({
				embed,
				files: [{
					attachment: 'src/images/attentionicon.PNG',
					name: 'attentionicon.PNG',
				}],
			}).then(async (newMessage) => {
				const filter = (reaction, user) =>
					user.id === msg.author.id &&
					reaction.emoji.name === '1⃣' ||
					user.id === msg.author.id &&
					reaction.emoji.name === '2⃣' ||
					user.id === msg.author.id &&
					reaction.emoji.name === '3⃣' ||
					user.id === msg.author.id &&
					reaction.emoji.name === '4⃣' ||
					user.id === msg.author.id &&
					reaction.emoji.name === '5⃣' ||
					user.id === msg.author.id &&
					reaction.emoji.name === '6⃣' ||
					user.id === msg.author.id &&
					reaction.emoji.name === '7⃣' ||
					user.id === msg.author.id &&
					reaction.emoji.name === '8⃣' ||
					user.id === msg.author.id &&
					reaction.emoji.name === '9⃣' ||
					user.id === msg.author.id &&
					reaction.emoji.name === '❌';
				const collector = newMessage.createReactionCollector(filter, {
					time: 30000
				});
				newMessage.delete(30000).catch(() => {});
				collector.once('collect', async (reaction) => {
					const chosen = reaction.emoji.name;
					for (let i = 0; i < result.length; i++) {
						if (weaponDB[indexes[i]].type === 'gun') {
							if (weaponDB[indexes[i]].rarity === 4) {
								titleForEmbed = '4★ Gun';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 3) {
								titleForEmbed = '3★ Gun';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 2) {
								titleForEmbed = '2★ Gun';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 1) {
								titleForEmbed = '1★ Gun';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gunicon.PNG';
							}
						}

						if (weaponDB[indexes[i]].type === 'katana') {
							if (weaponDB[indexes[i]].rarity === 4) {
								titleForEmbed = '4★ Katana';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 3) {
								titleForEmbed = '3★ Katana';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 2) {
								titleForEmbed = '2★ Katana';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 1) {
								titleForEmbed = '1★ Katana';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/katanaicon.PNG';
							}
						}

						if (weaponDB[indexes[i]].type === 'cannon') {
							if (weaponDB[indexes[i]].rarity === 4) {
								titleForEmbed = '4★ Cannon';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 3) {
								titleForEmbed = '3★ Cannon';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 2) {
								titleForEmbed = '2★ Cannon';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 1) {
								titleForEmbed = '1★ Cannon';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/cannonicon.PNG';
							}
						}

						if (weaponDB[indexes[i]].type === 'greatsword') {
							if (weaponDB[indexes[i]].rarity === 4) {
								titleForEmbed = '4★ Greatsword';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 3) {
								titleForEmbed = '3★ Greatsword';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 2) {
								titleForEmbed = '2★ Greatsword';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 1) {
								titleForEmbed = '1★ Greatsword';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/greatswordicon.PNG';
							}
						}

						if (weaponDB[indexes[i]].type === 'cross') {
							if (weaponDB[indexes[i]].rarity === 4) {
								titleForEmbed = '4★ Cross';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 3) {
								titleForEmbed = '3★ Cross';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 2) {
								titleForEmbed = '2★ Cross';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 1) {
								titleForEmbed = '1★ Cross';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/crossicon.PNG';
							}
						}

						if (weaponDB[indexes[i]].type === 'gauntlet') {
							if (weaponDB[indexes[i]].rarity === 4) {
								titleForEmbed = '4★ Gauntlet';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 3) {
								titleForEmbed = '3★ Gauntlet';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 2) {
								titleForEmbed = '2★ Gauntlet';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 1) {
								titleForEmbed = '1★ Gauntlet';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/gauntleticon.PNG';
							}
						}

						if (weaponDB[indexes[i]].type === 'scythe') {
							if (weaponDB[indexes[i]].rarity === 4) {
								titleForEmbed = '4★ Scythe';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 3) {
								titleForEmbed = '3★ Scythe';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 2) {
								titleForEmbed = '2★ Scythe';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
							}
							if (weaponDB[indexes[i]].rarity === 1) {
								titleForEmbed = '1★ Scythe';
								authorImageAttachmentForEmbed = 'src/images/equipment/weapon/scytheicon.PNG';
							}
						}
						const emoji = reactionNumberArray[i];
						if (chosen === emoji) {
							newMessage.delete();
							if (result.length < 1) {
								msg.reply('please do not add reaction by yourself.');
							} else {
								let field1 = '';
								let field2 = '';

								if (weaponDB[indexes[i]].skillonetitle !== '-') {
									field1 = {
										name: weaponDB[indexes[i]].skillonetitle,
										value: weaponDB[indexes[i]].skillonedetail,
									};
								} else {
									field1 = {
										name: 'Skill',
										value: 'None',
									};
								}

								if (weaponDB[indexes[i]].skilltwotitle !== '-') {
									field2 = {
										name: weaponDB[indexes[i]].skilltwotitle,
										value: weaponDB[indexes[i]].skilltwodetail,
									};
								} else {
									field2 = {
										name: 'Skill',
										value: 'None',
									};
								}

								embed = {
									author: {
										name: titleForEmbed,
										icon_url: `attachment://${authorImageAttachmentForEmbed.replace('src/images/equipment/weapon/', '')}`,
									},
									color: 6332693,
									title: weaponDB[indexes[i]].name,
									thumbnail: {
										url: weaponDB[indexes[i]].image,
									},
									footer: {
										icon_url: 'attachment://attentionicon.PNG',
										text: 'All information from http://houkai3rd.arthobbylab.com/',
									},
									fields: [{
										name: 'Attack',
										value: weaponDB[indexes[i]].attack,
										inline: true,
									}, {
										name: 'Critical',
										value: weaponDB[indexes[i]].critical,
										inline: true,
									}, field1, field2],
								};
								msg.reply({
									embed,
									files: [{
										attachment: authorImageAttachmentForEmbed,
										name: authorImageAttachmentForEmbed.replace('src/images/equipment/weapon/', ''),
									}, {
										attachment: 'src/images/attentionicon.PNG',
										name: 'attentionicon.PNG',
									}],
								});
							}
						}
					}

					if (chosen === '❌') {
						newMessage.delete();
					}
					collector.stop();
				});

				for (let i = 0; i < result.length; i++) {
					await newMessage.react(reactionNumberArray[i]).catch(() => {});
				}

				await newMessage.react('❌').catch(() => {});

			});

		} else if (result.length > 9) {
			msg.reply('Too many results! Be specific with your search!');
		} else if (result.length < 1) {
			msg.reply('No weapon found.');
		}
	}
}

exports.weaponList = weaponList;
exports.weaponSearch = weaponSearch;