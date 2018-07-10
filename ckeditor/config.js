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
	   config.height = '520px'; // 高度  


	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		
		
		{ name: ['others']},
		
		{ name: 'basicstyles', groups: [ 'basicstyles'] },
		{ name: 'basicstyles', groups: [ 'undo','redo',] },
		{name:'colors'},
		{ name: 'paragraph',   groups: [  'align' ] },
		{ name: 'styles' },
		
		
		
	
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
