const { shadeColor } = require('../utils/transformColor');

module.exports = (tokenColorPalette, withItalics) => {
  const tokenColors = [
    {
      settings: { foreground: tokenColorPalette.color1 },
      scope: [
        'invalid.broken',
        'message.error',
        'invalid.deprecated',
        'invalid.unimplemented',
        'invalid.illegal',
        'brackethighlighter.unmatched',
        'markup.deleted',
        'meta.diff.header.from-file',
        'punctuation.definition.deleted'
      ]
    },
    {
      settings: { foreground: tokenColorPalette.color2 },
      scope: ['storage', 'storage.type', 'keyword']
    },
    {
      settings: { foreground: tokenColorPalette.color3 },
      scope: ['entity.name.function', 'meta.diff.range']
    },
    {
      settings: { foreground: tokenColorPalette.color4 },
      scope: [
        'entity.name.tag',
        'support.class.component',
        'markup.quote',
        'string.regexp constant.character.escape',
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted'
      ]
    },
    {
      settings: { foreground: tokenColorPalette.color5 },
      scope: [
        'constant',
        'entity.name.constant',
        'variable.other.constant',
        'variable.language',
        'entity',
        'meta.output',
        'support',
        'meta.property-name',
        'string variable',
        'source.regexp',
        'string.regexp',
        'support.constant',
        'meta.separator',
        'meta.diff.header',
        'markup.ignored',
        'markup.untracked',
        'support.variable',
        'meta.module-reference',
        'markup.heading',
        'markup.heading entity.name',
        'markup.raw'
      ]
    },
    {
      settings: { foreground: tokenColorPalette.color5 },
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json'
      ]
    },
    {
      settings: { foreground: shadeColor(tokenColorPalette.color5, 10) },
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ]
    },
    {
      settings: { foreground: shadeColor(tokenColorPalette.color5, 20) },
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ]
    },
    {
      settings: { foreground: shadeColor(tokenColorPalette.color5, 30) },
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ]
    },
    {
      settings: { foreground: shadeColor(tokenColorPalette.color5, 40) },
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ]
    },
    {
      settings: { foreground: shadeColor(tokenColorPalette.color5, 50) },
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ]
    },
    {
      settings: { foreground: shadeColor(tokenColorPalette.color5, 60) },
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ]
    },
    {
      settings: { foreground: shadeColor(tokenColorPalette.color5, 70) },
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ]
    },
    {
      settings: { foreground: shadeColor(tokenColorPalette.color5, 80) },
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
      ]
    },
    {
      settings: { foreground: tokenColorPalette.color6 },
      scope: [
        'entity.name',
        'meta.export.default',
        'meta.definition.variable',
        'variable',
        'punctuation.definition.list.begin.markdown',
        'markup.changed',
        'punctuation.definition.changed'
      ]
    },
    {
      settings: { foreground: tokenColorPalette.color7 },
      scope: [
        'string',
        'punctuation.definition.string',
        'string punctuation.section.embedded source',
        'constant.other.reference.link',
        'string.other.link',
        'string.regexp.character-class',
        'string.regexp constant.character.escape',
        'string.regexp source.ruby.embedded',
        'string.regexp string.regexp.arbitrary-repitition'
      ]
    },
    {
      settings: { foreground: tokenColorPalette.color8 },
      scope: [
        'meta.export.default.tsx',
        'storage.type.java',
        'variable.parameter.function',
        'meta.jsx.children',
        'meta.block',
        'meta.tag.attributes',
        'entity.name.constant',
        'meta.object.member',
        'meta.embedded.expression',
        'storage.modifier.package',
        'storage.modifier.import',
        'variable.other',
        'support.type.property-name.css'
      ]
    },
    {
      settings: { foreground: tokenColorPalette.color9 },
      scope: ['string source', 'markup.italic', 'markup.bold']
    },
    {
      settings: { foreground: tokenColorPalette.color10 },
      scope: [
        'comment',
        'punctuation.definition.comment',
        'string.comment',
        'brackethighlighter.tag',
        'brackethighlighter.curly',
        'brackethighlighter.round',
        'brackethighlighter.square',
        'brackethighlighter.angle',
        'brackethighlighter.quote'
      ]
    },
    {
      settings: {
        fontStyle: 'bold'
      },
      scope: [
        'markup.bold',
        'string.regexp constant.character.escape',
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted',
        'meta.diff.range'
      ]
    },
    {
      settings: {
        fontStyle: 'underline'
      },
      scope: ['constant.other.reference.link', 'string.other.link']
    }
  ];

  if (withItalics) {
    tokenColors.push({
      settings: {
        fontStyle: 'italic'
      },
      scope: [
        'markup.italic',
        'comment',
        'invalid.broken',
        'message.error',
        'invalid.deprecated',
        'invalid.unimplemented',
        'invalid.illegal',
        'brackethighlighter.unmatched',
        'storage.type',
        'keyword',
        'storage',
        'string',
        'string.other.link'
      ]
    });
  }

  return tokenColors;
};
