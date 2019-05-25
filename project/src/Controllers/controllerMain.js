
function isValidFormItem()
{
	if($.trim($("#name").val())=="")
	{ return "enter item name"; }
	return "true/false";
}

//--items   save/update
$(document).on("click","#btnSave",function()
{
			var result = isValidFormItem();
			if(result=="true")
				{ $("#formItems").submit(); }
			
			else
				{ $("#divStsMsgItem").html(result); }
				
});

//--edit
$(document).on("click","#btnEdit",function()
{
	$("#hidMode").val(update);
	$("#hidID").val($(this).attr("param"));
	$("#name").val($(this).closest("tr").find('td:eq(1)').text());
	$("#txtbrand").val($(this).closest("tr").find('td:eq(2)').text());
	
});
//--Delete
$(document).on("click","#btnRemove", function()
{
	$("#hidMode").val("remove");
	$("#hidID").val($(this).attr("param"));
	var res = confirm("are you sure?");
		if(res == true){
			$("#formproduct").submit();
		}


});


//items


$(document).on("click","#btnRefresh",function()
		{
	$("#divStsMsgItem").html("Loding...");
	$.ajax(
	{
		type : "get",
		url : "item"
			complete : function(response,status)
			{
				onRefreshComplete(response.responsesText,status);
				
			}
		
		});		
	});

function onRefreshComplete(response,status)
{
	if(status == "success")
		{
		$("#divproductTable").html(response);
		$("#divStsMsgproduct).html("Loaded Sucessfully");
		}
	else if(status == "error")
		{
		$("#divStsMsgproduct".html("Error while loading");
		
		}
	else
		{
		$("#divStsMsgproduct").html("unknown error while loading");
		
		}
		
}
	
	

//save.........................

$(document).on ("click","#btnSave",function()
		{
	var validity = isValidFormItem();
	
	if(validity == "true")
		{
			var mathod = "post";
			if($("#hidpID").val() != "0")
				{
					method = "put";
					
				}
			$("#divStsMsgproduct").html("saving..");
			
			$.ajax()
			{
				type : method,
				url : "Item",
				data : $("#formproduct").serialize(),
				complete : function(response.status)
				{
					onSaveupdateComplete(response.responseText,status);
					
				}
			});
		}
	else
		{
		$("#adivStsMsgproduct").html(validity);
		
		}
			});

		function onSaveUpdateComplete(response,status)
		{
			if(status == "success")
				{
				
				$("#formproduct")[0].rest();
				$("divproductTable").html(response);
				$("#divStsMsgproduct").html("saved successfully");
				$("#hidproductID").val("0");
							
				}
			else if (status == "error")
				{
				$("#divStsMsgproduct").html("Error while saving");
				
				}
			else
				{
				$("divStsMsgproduct").html("Unknown error while saving");
				
				}
			
		}
//Edit.......
$(document).on("click","#btnEdit",functon(){

		$("#hidItemID").val($(this).data("itemid"));
		$("#txtname").val($(this).closest("tr").find("td:eq(1)").text());
		$("#txtbrand").val($(this).closest("tr").find("td:eq(2)").text());
		
});

//Delete

$(document).on("click","#btnRemove",function()
		{
	$("#divStsMsgproduct").html("Removing");
	
	$.ajax
	{
		
		type : "delete",
		url : "Item",
		data : "ItemID = " + $(this).data("itemid"),
		complete : function(response.responseText,status);
	}
	
	});
	});
		
		
