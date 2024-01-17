//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const date = require(__dirname + "/date.js");
const mongoose = require("mongoose")
const _ = require("lodash")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-prakash:pra@cluster0.umyqf.mongodb.net/todolistDB")
// mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
const itemsSchema = {
  name: {
    type: String,
    required: [true, "put your task now "]
  }
}

const Item = mongoose.model("items", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todolist!"
})

const item2 = new Item({
  name: "Hit the + button to add a new item"
})
const item3 = new Item({
  name: "<-- Hit this to delete an item"
})

const defaultsItems = [item1, item2, item3]

const listSchema = {
  name: String,
  items: [itemsSchema]
}
const List = mongoose.model("List", listSchema)

app.get("/", function (req, res) {
  Item.find({}, function (err, founditems) {
    if (founditems.length === 0) {
      Item.insertMany(defaultsItems, function (err) {
        if (err)
          console.log(err);
        else
          console.log("successfully inserted default")
      });
      res.redirect("/")
    }
    else
      res.render("list", { listTitle: "Today", newListItems: founditems });
    // console.log(founditems)
  })

});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const newitem = new Item({
    name: itemName
  });
  if (listName == "Today") {
    newitem.save();
    res.redirect("/");
  }
  else {
    List.findOne({ name: listName }, function (err, foundList) {
      foundList.items.push(newitem);
      foundList.save();
      res.redirect("/" + listName);
    })
  }
});

app.post("/delete", function (req, res) {
  const checkItemid = req.body.checkbox
  const listName = req.body.listName;
  if (listName === "Today") {
    Item.findByIdAndRemove(checkItemid, function (err) {
      if (err)
        console.log(err)
      else {
        console.log(checkItemid + "succeesfully deleted")
        res.redirect("/")
      }
    })
  }
  else {
    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkItemid } } }, function (err, foundlist) {
      if (!err) {
        res.redirect("/" + listName)
      }
    })
  }


})

app.get("/:customListName", function (req, res) {
  const customListName = _.capitalize(req.params.customListName);
  List.findOne({ name: customListName }, function (err, foundlist) {
    if (!err) {
      if (!foundlist) {
        const list = new List({
          name: customListName,
          items: defaultsItems
        });
        list.save();
        res.redirect("/" + customListName)
      }
      else {
        res.render("list", { listTitle: foundlist.name, newListItems: foundlist.items });
      }
    }
  })


});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen( port, function () {
  console.log("Server started on port 3000");
});
