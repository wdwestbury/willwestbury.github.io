// load gallary as default
$(document).ready(function () 
{
	$("#content").load("../CartPortfolio/html/gallary.html");

	return false;
});

// load gallary when clicked
$("#work").click(function()
{
	$("#content").load("html/gallary.html")

	return false;
});

// load resume when clicked
$("#resume").click(function()
{
	$("#content").load("html/resume.html");

	return false;
});

// load contact form when clicked
$("#contact").click(function()
{
	$("#content").load("html/contact.html");

	return false;
});