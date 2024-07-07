document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const resultContainer = document.getElementById("result-container");
    const rows=document.querySelectorAll('#result-container tr');
    const table=document.getElementById('table');

    rows.forEach(row => {
        row.addEventListener('click', function() {
            alert(`Row clicked`);
        })
    }); 
  
    // Debounce function to limit the frequency of input event firing
    const debounce = (func, delay) => {
      let timer;
      return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    };
  
    // Input event listener with debouncing
    searchInput.addEventListener(
      "input",
      debounce(async () => {
        try {
          const query = searchInput.value;
          const res = await fetch(`/search?query=${query}`);
          const resjson = await res.json();
          console.log(resjson);
          if(resjson.length===0){
            const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                 row.style.display='none';
            }
            return ;
        }
       
          // Clear previous results
        //   resultContainer.innerHTML = "";
  
        //   // Loop through the fetched data and create table rows dynamically
        //   for (let index = 0; index < resjson.length; index++) {
        //     const row = document.createElement("tr");
        //     row.classList.add("cursor-pointer", "hover-bg-custom-grey");
  
        //     // Column 1
        //     const td1 = document.createElement("td");
        //     td1.classList.add(
        //       "col1-div",
        //       "items-center",
        //       "justify-center",
        //       "border-[0.9px]",
        //       "border-solid",
        //       "border-[#e0e3eb]",
        //       "h-13.2",
        //       "w-[53px]",
        //       "z-1"
        //     );
        //     const div1_td1 = document.createElement("div");
        //     div1_td1.classList.add(
        //       "w-[53px]",
        //       "flex",
        //       "items-center",
        //       "justify-center",
        //       "min-h-13.2"
        //     );
        //     const label_td1 = document.createElement("label");
        //     label_td1.classList.add(
        //       "relative",
        //       "inline-block",
        //       "w-[26px]",
        //       "h-5",
        //       "border-none"
        //     );
        //     const input_td1 = document.createElement("input");
        //     input_td1.setAttribute("type", "checkbox");
        //     input_td1.classList.add("sr-only", "peer");
        //     const div2_td1 = document.createElement("div");
        //     div2_td1.classList.add(
        //       "w-full",
        //       "h-full",
        //       "bg-[#F3EFEF]",
        //       "rounded-full",
        //       "peer-checked:bg-purple-600",
        //       "transition",
        //       "duration-300"
        //     );
        //     const div3_td1 = document.createElement("div");
        //     div3_td1.classList.add(
        //       "absolute",
        //       "left-1",
        //       "top-1",
        //       "bottom-3",
        //       "right-1",
        //       "w-3",
        //       "h-3",
        //       "bg-white",
        //       "rounded-full",
        //       "transition-transform",
        //       "duration-300",
        //       "transform",
        //       "peer-checked:translate-x-4"
        //     );
        //     label_td1.appendChild(input_td1);
        //     label_td1.appendChild(div2_td1);
        //     label_td1.appendChild(div3_td1);
        //     div1_td1.appendChild(label_td1);
        //     td1.appendChild(div1_td1);
        //     row.appendChild(td1);
  
        //     // Column 2
        //     const col2 = document.createElement("td");
        //     col2.classList.add(
        //       "col2-div",
        //       "border-[0.9px]",
        //       "border-solid",
        //       "border-[#e0e3eb]",
        //       "pl-2.5",
        //       "min-h-13.2",
        //       "text-[14px]",
        //       "w-[283px]"
        //     );
        //     col2.textContent = resjson[index].Automation_name;
        //     row.appendChild(col2);
  
        //     // Column 3
        //     const col3 = document.createElement("td");
        //     col3.classList.add(
        //       "col3-div",
        //       "border-[0.9px]",
        //       "border-solid",
        //       "border-[#e0e3eb]",
        //       "pl-2",
        //       "min-h-13.2",
        //       "text-[12px]",
        //       "padding",
        //       "w-[133px]"
        //     );
        //     const col3Span = document.createElement("span");
        //     col3Span.classList.add(
        //       "col3-div-span",
        //       "rounded-[10px]",
        //       "px-[5px]",
        //       "py-[3px]",
        //       "border-[0.5px]",
        //       "border-solid",
        //       "border-[#E0E3EB]",
        //       "text-[#344054]",
        //       "bg-[#F5F6FA]"
        //     );
        //     col3Span.textContent = resjson[index].Trigger;
        //     col3.appendChild(col3Span);
        //     row.appendChild(col3);
  
        //     // Column 4
        //     const col4 = document.createElement("td");
        //     col4.classList.add(
        //       "pl-2.5",
        //       "border-[0.9px]",
        //       "border-solid",
        //       "border-[#e0e3eb]",
        //       "w-[223px]"
        //     );
        //     const col4Div = document.createElement("div");
        //     col4Div.classList.add("flex", "gap-[3px]");
        //     resjson[index].Apps_used.forEach((imageName) => {
        //       let imgSrc = "";
        //       switch (imageName) {
        //         case "Telegram":
        //           imgSrc = "./icons/telegram.webp";
        //           break;
        //         case "fb":
        //           imgSrc = "./icons/fb.png";
        //           break;
        //         case "slack":
        //           imgSrc = "./icons/slack.png";
        //           break;
        //         case "whats":
        //           imgSrc = "./icons/whats.png";
        //           break;
        //         default:
        //           imgSrc = "./icons/gmail.png";
        //           break;
        //       }
        //       const img = document.createElement("img");
        //       img.classList.add(
        //         "border",
        //         "border-solid",
        //         "border-custom-img-border",
        //         "rounded-[3px]",
        //         "p-[4px]"
        //       );
        //       img.setAttribute("src", imgSrc);
        //       img.setAttribute("width", "22");
        //       img.setAttribute("height", "22");
        //       img.setAttribute("alt", "icon");
        //       col4Div.appendChild(img);
        //     });
        //     col4.appendChild(col4Div);
        //     row.appendChild(col4);
  
        //     // Column 5
        //     const col5 = document.createElement("td");
        //     col5.classList.add(
        //       "min-h-13.2",
        //       "pl-2.5",
        //       "border-[0.9px]",
        //       "border-solid",
        //       "border-[#e0e3eb]",
        //       "w-[163px]"
        //     );
        //     row.appendChild(col5);
  
        //     // Column 6
        //     const col6 = document.createElement("td");
        //     col6.classList.add(
        //       "name-time-container",
        //       "items-center",
        //       "min-h-13.2",
        //       "border-[0.9px]",
        //       "w-[205px]",
        //       "border-solid",
        //       "border-[#e0e3eb]",
        //       "pl-2.5",
        //       "text-sm",
        //       "p-2",
        //       "h-4.5",
        //       "text-[#475467]"
        //     );
        //     const col6Div = document.createElement("div");
        //     col6Div.classList.add(
        //       "flex",
        //       "h-full",
        //       "w-full",
        //       "items-center",
        //       "gap-[6px]",
        //       "justify-left"
        //     );
        //     const col6DivLeft = document.createElement("div");
        //     col6DivLeft.classList.add("name-time-container-left");
        //     const col6Span = document.createElement("span");
        //     col6Span.classList.add(
        //       "name-initials",
        //       "p-[4px]",
        //       "px-[6px]",
        //       "rounded-full",
        //       "text-[14px]",
        //       "text-[#667085]",
        //       "bg-[#EDEFF4]",
        //       "text-[#667085]",
        //       "font-semibold",
        //       "border-[0.8px]",
        //       "border-solid",
        //       "border-gray-200"
        //     );
        //     col6Span.textContent =
        //       resjson[index].Created_by.charAt(0).toUpperCase();
        //     col6DivLeft.appendChild(col6Span);
        //     col6Div.appendChild(col6DivLeft);
        //     const col6DivRight = document.createElement("div");
        //     col6DivRight.classList.add(
        //       "name-time-container-right",
        //       "flex",
        //       "flex-col",
        //       "tracking-[0.1px]"
        //     );
        //     const col6DivRight1 = document.createElement("div");
        //     col6DivRight1.classList.add("text-[#344054]", "font-light");
        //     col6DivRight1.textContent = resjson[index].Created_by;
        //     const col6DivRight2 = document.createElement("div");
        //     col6DivRight2.classList.add(
        //       "text-[12px]",
        //       "font-light",
        //       "date2",
        //       "text-[#667085]",
        //       "tracking-[0.3px]"
        //     );
        //     col6DivRight2.textContent = resjson[index].Modified_at;
        //     col6DivRight.appendChild(col6DivRight1);
        //     col6DivRight.appendChild(col6DivRight2);
        //     col6Div.appendChild(col6DivRight);
        //     col6.appendChild(col6Div);
        //     row.appendChild(col6);
  
        //     // Column 7
        //     const col7 = document.createElement("td");
        //     col7.classList.add(
        //       "name-time-container",
        //       "items-center",
        //       "min-h-13.2",
        //       "border-[0.9px]",
        //       "w-[205px]",
        //       "border-solid",
        //       "border-[#e0e3eb]",
        //       "pl-2.5",
        //       "text-sm",
        //       "p-2",
        //       "h-4.5",
        //       "text-[#475467]"
        //     );
        //     const col7Div = document.createElement("div");
        //     col7Div.classList.add(
        //       "flex",
        //       "h-full",
        //       "w-full",
        //       "items-center",
        //       "gap-[6px]",
        //       "justify-left"
        //     );
        //     const col7DivLeft = document.createElement("div");
        //     col7DivLeft.classList.add("name-time-container-left");
        //     const col7Span = document.createElement("span");
        //     col7Span.classList.add(
        //       "name-initials",
        //       "p-[4px]",
        //       "px-[6px]",
        //       "rounded-full",
        //       "text-[14px]",
        //       "text-[#667085]",
        //       "bg-[#EDEFF4]",
        //       "text-[#667085]",
        //       "font-semibold",
        //       "border-[0.8px]",
        //       "border-solid",
        //       "border-gray-200"
        //     );
        //     col7Span.textContent =
        //       resjson[index].Created_by.charAt(0).toUpperCase();
        //     col7DivLeft.appendChild(col7Span);
        //     col7Div.appendChild(col7DivLeft);
        //     const col7DivRight = document.createElement("div");
        //     col7DivRight.classList.add(
        //       "name-time-container-right",
        //       "flex",
        //       "flex-col",
        //       "tracking-[0.1px]"
        //     );
        //     const col7DivRight1 = document.createElement("div");
        //     col7DivRight1.classList.add("text-[#344054]", "font-light");
        //     col7DivRight1.textContent = resjson[index].Created_by;
        //     const col7DivRight2 = document.createElement("div");
        //     col7DivRight2.classList.add(
        //       "text-[12px]",
        //       "font-light",
        //       "date2",
        //       "text-[#667085]",
        //       "tracking-[0.3px]"
        //     );
        //     col7DivRight2.textContent = resjson[index].Modified_at;
        //     col7DivRight.appendChild(col7DivRight1);
        //     col7DivRight.appendChild(col7DivRight2);
        //     col7Div.appendChild(col7DivRight);
        //     col7.appendChild(col7Div);
        //     row.appendChild(col7);
  
        //     // Column 8 and 9 (empty columns as placeholders)
        //     const col8 = document.createElement("td");
        //     col8.classList.add(
        //       "border-[0.9px]",
        //       "border-solid",
        //       "border-[#e0e3eb]",
        //       "min-h-13.2",
        //       "w-[61px]"
        //     );
        //     row.appendChild(col8);
        //     const col9 = document.createElement("td");
        //     col9.classList.add(
        //       "border-[0.9px]",
        //       "border-solid",
        //       "border-[#e0e3eb]",
        //       "min-h-13.2",
        //       "w-[42px]"
        //     );
        //     row.appendChild(col9);
  
        //     // Append row to the result container
        //     resultContainer.appendChild(row);
        //   }
        const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
             row.style.display='';
        }
        
        // Function to check if a row matches any item in the JSON array
        const isRowInJsonArray = (row,j) => {
          const cells = row.getElementsByTagName('td');
        
            if (
              resjson[j].Automation_name === cells[1].textContent
            ) {
                
              return true;
            }
          
          return false;
        };
        
        // Loop through each row
        let j=0;
        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          
          // If the row data is not in the JSON array, hide the row
          if (!isRowInJsonArray(row,j)) {
            row.style.display = 'none';
          }
          else{
            j++;
          }
        }

        } catch (err) {
          console.log(err);
        }
      }, 400) // Debounce delay (adjust as needed)
    );

    

  });
  