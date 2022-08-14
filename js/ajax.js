window.onload = function() {
    function getJson() {
        $.ajax({
        type:"get",
        url:"https://reqres.in/api/users?page=1",
        dataType:"json",
        success: function(data){
            console.log("api is called successfully");
            console.log("the fetched data",data.data);
            var str = ''; 
                $.each(data.data , function(index, item){
                    str += '<article class=\"card\"><header><h2>' + item.first_name +' '+ item.last_name + ' </header><img src=\"'+ item.avatar + '\" alt=\"avater\"><div class=\"content\"><p> email:<br>' + item.email + '</p></div></article>';
                });
            $('.cards').append(str);
        },
        error:function(){
            console.log("Something went wrong");
        }
    })
    }
    getJson();
    }
    
    