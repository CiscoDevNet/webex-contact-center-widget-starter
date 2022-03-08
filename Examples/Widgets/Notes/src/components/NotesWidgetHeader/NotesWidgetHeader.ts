/* eslint-disable @typescript-eslint/no-explicit-any */
// import { i18nMixin, t } from "@/mixins/i18nMixin";
import "@momentum-ui/web-components";
import "@uuip/unified-ui-platform-common-components";
import { customElement, html, LitElement, property, query, TemplateResult } from "lit-element";
import {
  CLEAR_FILTER,
  COLORS,
  DATE,
  DELETE,
  DOWNLOAD,
  ENTER_KEY_CODE,
  FAVORITES,
  HEADER_ACTIONS_OVERLAY_WIDTH
} from "../../constants";
import { checkIfSpaceOrEnterKeydown } from "../../Utils";
import style from "./NotesWidgetHeader.scss";
import app from "../../assets/localisation/app.json";

export const MORE_ACTIONS = [DOWNLOAD, DELETE];
export const FILTER_OPTIONS = [DATE, FAVORITES, COLORS, CLEAR_FILTER];
export const MORE_ACTIONS_ICONS = ["download_14", "delete_14"];
export const INITIAL_FILTER = {
  name: "",
  value: ""
};

export namespace NotesWidgetHeader {
  /**
   * @element agentx-wc-notes-widget-header
   * @fires filter
   * @fires add-note
   * @fires more-action
   */
  @customElement("agentx-wc-notes-widget-header")
  export class Element extends LitElement {
    @property({ type: Object, reflect: true }) filter = { ...INITIAL_FILTER };
    @property({ type: Boolean, reflect: true }) disabled = false;
    @property({ type: Boolean, reflect: true }) addNoteDisabled = false;

    @query("md-datepicker") datePickerElm: any;

    private handleFilterSelect(event: CustomEvent) {
      const selected = FILTER_OPTIONS[event.detail.selected];
      if (selected === FAVORITES) {
        this.handleFilter({ name: FAVORITES, value: true });
      } else if (selected === CLEAR_FILTER) {
        this.handleFilter(INITIAL_FILTER);
      }
    }

    private handleDateFilterKeydown(event: KeyboardEvent): void {
      if (checkIfSpaceOrEnterKeydown(event.code)) {
        this.datePickerElm.shadowRoot
          .querySelector("[slot=menu-trigger]")
          ?.dispatchEvent(new KeyboardEvent("keydown", { code: ENTER_KEY_CODE }));
      }
    }

    private handleFilter(filter: NotesFilter) {
      this.filter = filter;
      this.dispatchFilterUpdate();
    }

    private dispatchFilterUpdate(): void {
      this.dispatchEvent(
        new CustomEvent("filter", {
          detail: { value: this.filter }
        })
      );
      this.requestUpdate();
    }

    private handleAddNote() {
      this.dispatchEvent(new CustomEvent("add-note", {}));
    }

    private handleMoreActionSelect(event: CustomEvent): void {
      this.dispatchEvent(
        new CustomEvent("more-action", {
          detail: { action: MORE_ACTIONS[event.detail.selected] }
        })
      );
    }

    static get styles() {
      return style;
    }

    renderDateFilterListItem(): TemplateResult {
      return html`
        <md-list-item
          class=${DATE}
          ?filter="${this.filter.name === DATE}"
          aria-label="${app.notes.date}"
          slot="list-item"
          @keydown=${(event: KeyboardEvent) => this.handleDateFilterKeydown(event)}
          ><md-datepicker
            custom-trigger
            @date-selection-change=${(event: CustomEvent) =>
              this.handleFilter({ name: DATE, value: event.detail.data })}
          >
            <div class="list-item-wrapper date-filter-wrapper" slot="date-trigger" part="date-picker">
              <span>${app.notes.date}</span>
              <md-icon slot="icon" name="arrow-right-optical_14"></md-icon>
            </div>
          </md-datepicker>
        </md-list-item>
      `;
    }

    renderFavoriteFilterListItem(): TemplateResult {
      return html`
        <md-list-item
          class=${FAVORITES}
          ?filter="${this.filter.name === FAVORITES}"
          aria-label="${app.notes.favorites}"
          slot="list-item"
          ><div class="list-item-wrapper">${app.notes.favorites}</div></md-list-item
        >
      `;
    }

    renderColorFilterListItem(): TemplateResult {
      return html`
        <md-list-item
          class=${COLORS}
          ?filter="${this.filter.name === COLORS}"
          aria-label="${app.notes.colorCodes}"
          slot="list-item"
          ><div class="list-item-wrapper color-filter-wrapper">
            <span>${app.notes.colorCodes}</span>
            <agentx-wc-notes-colors
              .selectedColor=${this.filter.value}
              @color-selected=${(event: CustomEvent) => this.handleFilter({ name: COLORS, value: event.detail.value })}
            ></agentx-wc-notes-colors></div
        ></md-list-item>
      `;
    }

    renderClearFilterListItem(): TemplateResult {
      return html`
        <md-list-item class=${CLEAR_FILTER} aria-label="${app.notes.clearFilter}" slot="list-item"
          ><div class="list-item-wrapper">${app.notes.clearFilter}</div></md-list-item
        >
      `;
    }

    renderFilterActions(): TemplateResult {
      return html`
        <md-menu-overlay
          ?disabled=${this.disabled}
          class="menu-overlay filter"
          custom-width="${HEADER_ACTIONS_OVERLAY_WIDTH}"
          @menu-overlay-close=${(event: CustomEvent) => event.stopPropagation()}
        >
          <md-tooltip slot="menu-trigger" message="${app.notes.filter}">
            <md-button ?disabled=${this.disabled} ariaLabel="${app.notes.filter}" circle size="28"
              ><md-icon slot="icon" name="icon-adjust_16"></md-icon
            ></md-button>
          </md-tooltip>
          <div class="overlay-content-wrapper">
            <md-list
              label="${app.notes.filter}"
              @list-item-change=${(event: CustomEvent) => this.handleFilterSelect(event)}
            >
              ${this.renderDateFilterListItem()} ${this.renderFavoriteFilterListItem()}
              ${this.renderColorFilterListItem()} ${this.renderClearFilterListItem()}
            </md-list>
          </div>
        </md-menu-overlay>
      `;
    }

    renderMoreActions(): TemplateResult {
      return html`
        <md-menu-overlay
          ?disabled=${this.disabled}
          class="menu-overlay more-actions"
          custom-width="${HEADER_ACTIONS_OVERLAY_WIDTH}"
          @menu-overlay-close=${(event: CustomEvent) => event.stopPropagation()}
        >
          <md-tooltip slot="menu-trigger" message="${app.notes.moreActions}">
            <md-button ?disabled=${this.disabled} ariaLabel="${app.notes.moreActions}" circle size="28"
              ><md-icon slot="icon" name="more-adr_16"></md-icon
            ></md-button>
          </md-tooltip>
          <div class="overlay-content-wrapper">
            <md-list
              label="${app.notes.moreActions}"
              @list-item-change=${(event: CustomEvent) => this.handleMoreActionSelect(event)}
            >
              ${MORE_ACTIONS.map((action: string, index: number) => {
                const label = action === 'download' ? app.notes.download : app.notes.delete;
                return html`
                  <md-list-item class=${action} aria-label="${label}" slot="list-item"
                    ><div class="list-item-wrapper">
                      <md-icon slot="icon" name=${MORE_ACTIONS_ICONS[index]}></md-icon>${label}
                    </div></md-list-item
                  >
                `;
              })}
            </md-list>
          </div>
        </md-menu-overlay>
      `;
    }

    renderAddNoteButton(): TemplateResult {
      return html`
        <md-button
          ?disabled=${this.disabled || this.addNoteDisabled}
          class="add-note-btn"
          variant="primary"
          ariaLabel="${app.notes.addNote}"
          @button-click=${() => this.handleAddNote()}
        >
          <md-icon slot="icon" name="icon-add_16"></md-icon>
          <span slot="text">${app.notes.addNote}</span>
        </md-button>
      `;
    }

    render() {
      return html`
        <div class="widget-header-wrapper">
          ${this.renderAddNoteButton()} ${this.renderFilterActions()} ${this.renderMoreActions()}
        </div>
      `;
    }
  }
}

export type NotesFilter = {
  name: string;
  value: any;
};
