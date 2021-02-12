declare namespace JSX {
  interface IntrinsicElements {
    slot: HTMLProps<HTMLSlotElement>;
    'agentx-react-interaction-popover': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        agentconfig: { isendcallenabled: boolean };
        taskMap: Map;
      }
    >;
    'md-tooltip': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        message: string;
        placement: string;
        disabled: boolean;
      }
    >;
    'md-alert-banner': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        type: string;
        message: string;
        closable: boolean;
        show: boolean;
      }
    >;
    'md-toggle-switch': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        label: string;
        name: string;
        value: string;
        htmlId: string;
        checked: boolean;
        disabled: boolean;
        small: boolean;
        smaller: boolean;
      }
    >;
    'md-label': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        label: string;
        htmlFor: string;
        active: boolean;
        disabled: boolean;
      }
    >;
    'md-button': React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLElement,
      {
        ariaLabel: string;
        ariaLabelledBy: string;
        ariaPressed: boolean;
        circle: boolean;
        color:
        'blue'
        | 'red'
        | 'green'
        | 'orange'
        | 'yellow'
        | 'mint'
        | 'purple'
        | 'pink'
        | 'cyan'
        | 'white'
        | 'dark-gray'
        | 'duck-egg'
        | 'violet'
        | 'color-none'
        | '';
        containerLarge: boolean;
        href: string;
        id: string;
        value: string;
        keyboardKey: string;
        label: string;
        loading: boolean;
        hasRemoveStyle: boolean;
        size: Button.Size;
        tag: 'button' | 'input' | 'a';
        variant: 'primary' | 'secondary' | 'red' | 'green' | 'white' | 'darkGrey';
        activityType: string;
        iconActive: boolean;
      }
    >;
    'md-icon': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        color: string;
        description: string;
        name: string;
        id: string;
        size: string;
        sizeOverrided: boolean;
        title: string;
        type: string;
        isActive: boolean;
        isComboBoxIcon: boolean;
      }
    >;
    'md-badge': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        color: string;
        bgColor: string;
        textColor: string;
        outlined: boolean;
        compact: boolean;
        circle: boolean;
        small: boolean;
        split: boolean;
      }
    >;
    'md-combobox': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        label: string;
        options: (string | OptionMember)[];
        placeholder: string;
        isMulti: boolean;
        disabled: boolean;
        ordered: boolean;
        expanded: boolean;
        inputValue: string;
        selectedOptions: (string | OptionMember)[];
        visibleOptions: number;
        optionId: string;
        optionValue: string;
        isCustomContent: boolean;
        "custom-options": [];
        "with-custom-content": boolean;
        customContent: Element[];
      }
    >;
    'md-editable-field': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        alignment: string,
        disabled: boolean,
        isEditing: boolean,
        messageArr: Array<string>
      }
    >;
    'md-avatar': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        alt: string;
        backgroundColor: string;
        buttonClassName: string;
        color: string;
        failureBadge: boolean;
        hasNotification: boolean;
        hideDefaultTooltip: boolean;
        icon: string;
        isDecrypting: boolean;
        isOverview: boolean;
        size: string;
        src: string;
        tab: string;
        type: stirng;
      }
    >;
    'md-link': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        color: string;
        disabled: boolean;
        href: string;
        tag: stirng;
      }
    >;
    'md-menu-overlay': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        isOpen: boolean;
        size: "small" | "large";
        maxHeight: string;
        customWidth: string;
        showArrow: boolean;
        position:
        "left-start"
        | "left"
        | "left-end"
        | "right-start"
        | "right"
        | "right-end"
        | "top-start"
        | "top"
        | "top-end"
        | "bottom-start"
        | "bottom"
        | "bottom-end"
      }
    >;
    'md-spinner': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        size: number;
        color: string;
      }
    >;
    'md-chip': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        color: string;
        bgColor: string;
        textColor: string;
        height: string;
        icon: string;
        iconColor: string;
        role: Chip.Role;
        id: string;
        small: boolean;
        readonly: boolean;
        selected: boolean;
        loadProgress: number;
        value: string;
      }
    >;
    'md-tabs': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        selected: number;
      }
    >;
    'md-tab': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        tabIndex: number;
        disabled: boolean;
      }
    >;
    'md-tab-panel': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        selected: boolean;
      }
    >;
    'md-radio': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        tabindex: number;
        disabled: boolean;
        value: string;
      }
    >;
    'md-radiogroup': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        checked: number;
        alignment: "horizontal" | "vertical";
        label: string;
      }
    >;
    'md-checkbox': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        checked: boolean;
        disabled: boolean;
        indeterminate: boolean;
        tabIndex: number;
      }
    >;
    'md-checkboxgroup': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        alignment: "horizontal" | "vertical";
        label: string;
      }
    >;
    'md-input': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        label: string;
        htmlId: string;
        containerSize: string;
        placeholder: string;
        ariaLabel: string;
        clearAriaLabel: string;
        id: string;
        helpText: string;
        inputSize: string;
        secondaryLabel: string;
        shape: string;
        nestedLevel: string;
        value: string;
        type: string;
        searchable: boolean;
        clear: boolean;
        multiline: boolean;
        isFilled: boolean;
        required: boolean;
        readOnly: boolean;
        disabled: boolean;
        isLoading: boolean;
        multi: boolean;
        auxiliaryContentPosition: "before" | "after" | null;
        ariaDescribedBy: string;
        messageArr: [];
      }
    >;
    'md-task-item': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        mediaType: string;
        status: string;
        title: string;
        queue: string;
        accepted: boolean;
        selected: boolean;
      }
    >;
    'md-list': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        label: string;
        role: "list" | "listbox";
        tabType: "vertical" | "horizontal";
        alignment: "left" | "right";
        justify: string;
        focused: number;
      }
    >;
    'md-modal': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        show: boolean;
        animateIn: boolean;
        headerLabel: string;
        headerMessage: string;
        htmlId: string;
        ariaLabel: string;
        ariaDescription: string;
        showCloseButton: boolean;
        backdropClickExit: boolean;
        size: modalType;
        closeBtnName: string;
        hideFooter: boolean;
        hideHeader: boolean;
        backDrop?: HTMLElement;
      }
    >;
    'md-list-item': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        active: boolean;
        type:
        "small"
        | "large"
        | "xlarge"
        | "space"
        | "auto"
        | "header"
        | "36"
        | "52"
        | "60";
        disabled: boolean;
        selected: boolean;
        isReadOnly: boolean;
        label: string;
        role: "listitem" | "option";
        listLength: number;
        separator: boolean;
        title: string;
        value: string;
        highlight: string;
        id: string;
        multiselect: boolean;
        tabindex: number;
      }
    >;
    'md-combobox': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement,
      {
        label: string;
        options: string[] | [{ [key: string]: string }],
        placeholder: string;
        isMulti: boolean;
        disabled: boolean;
        ordered: boolean;
        expanded: boolean;
        selectedOptions: string[] | [{ [key: string]: string }],
        visibleOptions: number;
        optionId: string;
        optionValue: string;
        isCustomContent: boolean;
        value: string[] | [{ [key: string]: string }]
      }
    >;
  }
}