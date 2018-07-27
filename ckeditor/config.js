/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// config.language = 'en'; // 配置语言   
config.language = 'zh-cn'; // 配置语言   
	config.removePlugins = 'elementspath,resize';
      config.forcePasteAsPlainText = false;
      config.width = 'auto'; // 宽度   
	   config.height = '265px'; // 高度  
	   config.colorButton_colors = `
	   000,800000,8B4513,2F4F4F,008080,000080,4B0082,696969,B22222,A52A2A,DAA520,006400,40E0D0,00F,33ffcc,ff0000,cc0000,ff0066,33ff00,660099,330066,000000,0000ff,996699 
	   `
  
   config.toolbar = [
    ['Bold', 'Italic', 'Underline', 'Strike','SpecialChar'],
    ['TextColor', 'BGColor'],
    [ 'Redo', 'Undo' ],
    // ['JustifyLeft', 'JustifyCenter', 'JustifyRight'],
    // ['SelectAll','Cut'],
    ['Font'],
    ['Maximize']
   

];
	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Styles,Format,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

    //是否在选择颜色时显示“其它颜色”选项 plugins/colorbutton/plugin.js
config.colorButton_enableMore = true

    //区块的前景色默认值设置 plugins/colorbutton/plugin.js
config.colorButton_foreStyle = {
element : 'span',
styles : { 'color' : '#(color)' }
};

};
