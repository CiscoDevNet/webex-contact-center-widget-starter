# `Iframe_Widget_Allowedparams.json` is not the host iframe shell

[`Iframe_Widget_Allowedparams.json`](./Iframe_Widget_Allowedparams.json) is a **full Desktop layout** that embeds a page with the built-in `agentx-wc-iframe` component and an `allowedParams` Permissions-Policy string.

That is **model 2** below. It does **not** wrap a partner custom element in the security iframe shell.

| Model | File / folder |
| --- | --- |
| Host iframe shell (partner custom element) | [`Examples/Widgets/iframe-shell/`](./Examples/Widgets/iframe-shell/) and [`Examples/Layouts/Iframe_Shell_Partner_Fixes.json`](./Examples/Layouts/Iframe_Shell_Partner_Fixes.json) |
| Built-in page iframe (`agentx-wc-iframe`) | This layout JSON |
| Partner wraps their own app iframe | [`Examples/Widgets/prebuild-app-widget/`](./Examples/Widgets/prebuild-app-widget/) |
