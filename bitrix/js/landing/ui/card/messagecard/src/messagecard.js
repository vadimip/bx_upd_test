import {Cache, Dom, Tag, Type} from 'main.core';
import {BaseCard} from 'landing.ui.card.basecard';
import {Loc} from 'landing.loc';

import './css/style.css';

export class MessageCard extends BaseCard
{
	static cache = new Cache.MemoryCache();

	constructor(
		options: {
			id?: string,
			header?: string,
			description?: string,
			icon?: string,
			angle?: boolean,
			closeable?: boolean,
			hideActions?: boolean,
			restoreState?: boolean,
		},
	)
	{
		super(options);
		this.setEventNamespace('BX.Landing.UI.Card.MessageCard');
		Dom.addClass(this.getLayout(), 'landing-ui-card-message');

		this.onCloseClick = this.onCloseClick.bind(this);

		if (this.options.angle === false)
		{
			Dom.addClass(this.getLayout(), 'landing-ui-card-message-without-angle');
		}

		if (Type.isStringFilled(this.options.icon))
		{
			Dom.append(this.getIcon(), this.getHeader());
		}

		Dom.append(this.getTitle(), this.getHeader());
		Dom.append(this.getDescription(), this.getBody());

		if (this.options.closeable !== false)
		{
			Dom.append(this.getCloseButton(), this.getLayout());
		}

		if (this.options.hideActions !== true)
		{
			Dom.append(this.getActionsContainer(), this.getLayout());
		}

		if (this.isAllowRestoreState())
		{
			const state = MessageCard.cache.get(this.options.id, {shown: true});
			if (state.shown)
			{
				this.show();
			}
			else
			{
				this.hide();
			}
		}
	}

	isAllowRestoreState(): boolean
	{
		return this.options.restoreState && this.options.id;
	}

	getIcon(): HTMLDivElement
	{
		return this.cache.remember('icon', () => {
			return Tag.render`
				<div class="landing-ui-card-message-icon" style="background-image: url(${this.options.icon})"></div>
			`;
		});
	}

	getTitle(): HTMLDivElement
	{
		return this.cache.remember('title', () => {
			return Tag.render`
				<div class="landing-ui-card-message-title">${this.options.header}</div>
			`;
		});
	}

	getDescription(): HTMLDivElement
	{
		return this.cache.remember('description', () => {
			return Tag.render`
				<div class="landing-ui-card-message-description">${this.options.description}</div>
			`;
		});
	}

	getCloseButton(): HTMLDivElement
	{
		return this.cache.remember('closeButton', () => {
			return Tag.render`
				<div 
					class="landing-ui-card-message-close-button" 
					onclick="${this.onCloseClick}"
					title="${Loc.getMessage('LANDING_MESSAGE_CARD_HIDE')}"
				></div>
			`;
		});
	}

	onCloseClick(event: MouseEvent)
	{
		event.preventDefault();
		this.hide();
		this.emit('onClose');
		MessageCard.cache.set(this.options.id, {shown: false});
	}

	getActionsContainer(): HTMLDivElement
	{
		return this.cache.remember('actionsContainer', () => {
			return Tag.render`
				<div class="landing-ui-card-message-actions">
					${this.getCloseLink()}
				</div>
			`;
		});
	}

	getCloseLink(): HTMLDivElement
	{
		return this.cache.remember('closeLink', () => {
			return Tag.render`
				<span class="ui-link ui-link-secondary ui-link-dashed landing-ui-card-message-close-link" onclick="${this.onCloseClick}">
					${Loc.getMessage('LANDING_MESSAGE_CARD_HIDE')}
				</span>
			`;
		});
	}

	onClick()
	{
		this.onClickHandler(this);
		this.emit('onClick');
	}
}