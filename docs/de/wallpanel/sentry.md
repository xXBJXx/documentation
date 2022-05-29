---

# This control sidebar index

index: 4

# This is the icon of the page

icon: article

# This is the title of the article

title: Sentry

# Set author

author: xXBJXx

# Set writing time

date: 2022-05-25

# A page can have multiple categories

category:

- Wallpanel

# A page can have multiple tags

tag:

- Wallpanel
- Sentry.io

# The page’s sidebar heading rendering depth.

headerDepth: 1
---

Was ist Sentry.io und was wird an die Server dieses Unternehmens gemeldet?

Sentry.io ist ein Service für Entwickler, um einen Überblick über Fehler in ihren Anwendungen zu bekommen. Und genau das ist in diesem Adapter implementiert.

Wenn der Adapter abstürzt, oder ein anderer Code-Fehler auftritt, wird diese Fehlermeldung, die auch im ioBroker Log
erscheint an Sentry übermittelt. Wenn Sie ioBroker GmbH erlaubt haben, Diagnosedaten zu sammeln, dann wird auch Ihre
Installation-ID (dies ist nur eine eindeutige ID ohne zusätzliche Informationen über Sie, wie Ihrer E-Mail / Namen)
enthalten. Dies erlaubt Sentry, Fehler zu gruppieren und zu zeigen, wie viele Benutzer von einem solchen Fehler
betroffen sind. All dies hilft den Entwicklern, fehlerfreie Adapter bereitzustellen, die praktisch nie abstürzen.

Für weitere Details und Informationen zur Deaktivierung der Fehlerberichterstattung lesen Sie bitte die
[Sentry Plug-in Dokumentation](https://github.com/ioBroker/plugin-sentry#plugin-sentry) <br>
:::tip Info
Sentry Reporting wird ab js-controller 3.0 verwendet.
:::