var app = new function() {
    this.el = document.getElementById('countries');
    this.lo = document.getElementById('location');
    this.countries = ['Marketing', 'Finance', 'HR', 'R&D', 'Purchasing', 'Retail', 'Production', 'Accounting', 'Sales'];
    this.location = ['NJ','NY','Edison','California','Texas','Virginia','Boston','Delaware','Ohio']
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'Department';
      if (data) {
        if (data > 1) {
          name = 'Departments';
        }
        el.innerHTML = data + ' ' + name ;
      } else {
        el.innerHTML = 'No ' + name;
      }
    };
    
    this.FetchAll = function() {
      var data = '';
      if (this.countries.length > 0) {
        for (i = 0; i < this.countries.length; i++) {
          data += '<tr>';
          data += '<td>' + this.countries[i] + '</td>';
          data += '<td>' + this.location[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';
        }
      }
      this.Count(this.countries.length);
      return this.el.innerHTML = data;
    };
    this.Add = function () {
      el = document.getElementById('add-name');
      lo = document.getElementById('add-loc')
      // Get the value
      var country = el.value;
      var loca = lo.value;
      if (country&& loca) {
        // Add the new value
        this.countries.push(country.trim());
        this.location.push(loca.trim());
        // Reset input value
        el.value = '';
        lo.value ='';
        // Dislay the new list
        this.FetchAll();
      }
    };
    this.Edit = function (item) {
      var el = document.getElementById('edit-name');
      var lo = document.getElementById('edit-loc');
      // Display value in the field
      el.value = this.countries[item];
      lo.value=this.location[item];
      // Display fields
      document.getElementById('spoiler').style.display = 'block';
      self = this;
      document.getElementById('saveEdit').onsubmit = function() {
        // Get value
        var country = el.value;
        var loca = lo.value;
        if (country&& loca) {
          // Edit value
          self.countries.splice(item, 1, country.trim());
          self.location.splice(item,1,loca.trim());
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
      }
    };
    this.Delete = function (item) {
      // Delete the current row
      this.countries.splice(item, 1);
      // Display the new list
      this.FetchAll();
    };
    
  }
  app.FetchAll();
  function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
  }