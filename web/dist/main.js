(async o=>{console.log("hello world");const e=await fetch("/status"),t=await e.json();console.log(t),await fetch("/echo",{method:"POST",body:JSON.stringify({message:"hello"}),headers:{"Content-Type":"application/json"}})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiQUFBQSxPQUFRQSxJQUNOQyxRQUFRQyxJQUFJLGVBQ1osTUFBTUMsUUFBaUJDLE1BQU0sV0FDdkJDLFFBQWlCRixFQUFTRyxPQUNoQ0wsUUFBUUMsSUFBSUcsU0FDZUQsTUFBTSxRQUMvQixDQUNFRyxPQUFRLE9BQ1JDLEtBQU1DLEtBQUtDLFVBQVUsQ0FBRUMsUUFBUyxVQUNoQ0MsUUFBUyxDQUNQLGVBQWdCLHFCQUl2QixFQWREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihhc3luYyAoJCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvc3RhdHVzXCIpO1xuICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2coanNvbkRhdGEpXG4gIGNvbnN0IGVjaG9SZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2VjaG9cIixcbiAgICB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcImhlbGxvXCIgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfVxuICAgIH1cbiAgKTtcbn0pKClcbiJdLCJuYW1lcyI6WyIkIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uRGF0YSIsImpzb24iLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1lc3NhZ2UiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==