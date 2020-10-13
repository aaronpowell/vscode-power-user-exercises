# General Productivity Tips

This section contains some generalised productivity tips that are useful regardless of language or platform.

## Command Pallet

This is the heart of VS Code and allows you easy access to virtually everything that the editor can do.

### Keyboard Shortcut

`CTRL + SHIFT + P`

### Alternative Uses

The _prefix_ on the command pallet will scope the available options, and here's the different things that you can do from it:

- **?**: Show all things you can do from the command pallet
- **No prefix**: File navigator. Shows recent files (order of access) but can search all files by typing. Keyboard Shortcut: `CTRL + P`
- **>**: Action list. Provides all actions that can be done in VS Code. Keyboard Shortcut: `CTRL + SHIFT + P`
- **term**: Terminal list, including create new terminal
- **view**: Navigate through the sidebar views

## Screencast Mode

This will show keypresses on screen and is useful when presenting or recording.

### Configuration Options

- Font size
- Overlay position
- Mouse colour
- All keys or shortcuts only.

## Zen Mode

Removes visual clutter and focuses just on the editor surface.

### Keyboard Shortcut

`CTRL + K, Z`

### Configuration Options

- Persist across sessions
- What to remove

## Rulers

Allow you to configure multiple ruler guidelines within the editor surface via the `settings.json` file.

### Example

```json
"editor.rulers": [
    {
      "color": "#F0A",
      "column": 20
    },
    {
      "color": "#C0FFEE",
      "column": 80
    }
  ]
```

## Code Actions on Save

Allow you to run an action from the command pallet when the file is saved. Think of it like 'format on save', but allowing you to run anything else you want. You can even scope it for a single language.

### Example

```json
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.organizeImports": true
    }
  },
```

## Line Number Control

Enable/disable line numbers, make them staggered, or make them relative.

```json
    "editor.lineNumbers": "relative"
```

## Creating Files and Folders

When you create a new file via the explore, you can also create a folder by adding the folder path to it, separated by a `/`, eg: `/src/index.js`.
