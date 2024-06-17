---

### Introduction to PHP

PHP is a server-side scripting language designed for web development. It can be embedded into HTML and is used to create dynamic web pages, handle form data, manage sessions, and interact with databases.

---

### PHP Basics

#### Variables

Variables store data values. In PHP, variables start with a `$` symbol.

**Example:**

```php
$name = "Alice";
$age = 25;
$birthYear = 1995;
```

#### Data Types

- **String**: Text data. e.g., `"Hello"`
- **Integer**: Numerical data. e.g., `42`
- **Float**: Decimal numbers. e.g., `3.14`
- **Boolean**: True or false. e.g., `true`
- **Array**: List of values. e.g., `array(1, 2, 3)`
- **Object**: Instance of a class. e.g., `new MyClass()`
- **NULL**: Variable with no value. e.g., `$x = NULL;`

**Example:**

```php
$message = "Hello, world!";
$count = 42;
$price = 19.99;
$isValid = true;
$fruits = array("Apple", "Banana", "Cherry");
$person = new stdClass();
$person->name = "Alice";
$unknown = NULL;
```

#### Operators

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical Operators**: `&&`, `||`, `!`

**Example:**

```php
$x = 10;
$y = 3;
echo $x + $y; // 13
echo $x == "10"; // true
echo $x === "10"; // false
```

---

### Control Structures

#### Conditional Statements

- `if`
- `else if`
- `else`
- `switch`

**Example:**

```php
$score = 85;
if ($score >= 90) {
    echo "A";
} elseif ($score >= 80) {
    echo "B";
} elseif ($score >= 70) {
    echo "C";
} elseif ($score >= 60) {
    echo "D";
} else {
    echo "F";
}
```

#### Loops

- `for`
- `while`
- `do...while`
- `foreach`

**Example:**

```php
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

$j = 0;
while ($j < 5) {
    echo $j;
    $j++;
}

$k = 0;
do {
    echo $k;
    $k++;
} while ($k < 5);

$fruits = array("Apple", "Banana", "Cherry");
foreach ($fruits as $fruit) {
    echo $fruit;
}
```

---

### Functions

Functions are blocks of code designed to perform a task.

**Example:**

```php
function greet($name) {
    return "Hello, $name!";
}
echo greet("Alice");

$greet = function($name) {
    return "Hello, $name!";
};
echo $greet("Bob");
```

---

### Arrays

Arrays store multiple values in a single variable.

**Example:**

```php
$fruits = array("Apple", "Banana", "Cherry");
echo $fruits[0]; // Apple
array_push($fruits, "Date");
print_r($fruits); // ["Apple", "Banana", "Cherry", "Date"]
array_pop($fruits);
print_r($fruits); // ["Apple", "Banana", "Cherry"]
```

---

### Superglobals

PHP has several built-in superglobals, which are arrays that provide access to various server and request data.

- `$_GET`
- `$_POST`
- `$_REQUEST`
- `$_SESSION`
- `$_COOKIE`
- `$_SERVER`

**Example:**

```php
// Accessing query parameters
$name = $_GET['name'];

// Accessing form data
$message = $_POST['message'];

// Accessing session data
session_start();
$_SESSION['user'] = 'Alice';

// Accessing cookie data
setcookie('username', 'Alice', time() + (86400 * 30), "/");
$username = $_COOKIE['username'];

// Accessing server data
echo $_SERVER['PHP_SELF'];
```

---

### Form Handling

PHP can handle form data submitted via GET or POST methods.

**Example:**

HTML:
```html
<form method="post" action="process.php">
    Name: <input type="text" name="name">
    <input type="submit">
</form>
```

PHP (`process.php`):
```php
$name = $_POST['name'];
echo "Hello, $name!";
```

---

### File Handling

PHP can read from and write to files on the server.

**Example:**

```php
// Writing to a file
$file = fopen("test.txt", "w");
fwrite($file, "Hello, World!");
fclose($file);

// Reading from a file
$file = fopen("test.txt", "r");
$content = fread($file, filesize("test.txt"));
fclose($file);
echo $content;
```

---

### PHP and MySQL

PHP can interact with MySQL databases to perform CRUD operations.

#### Connecting to MySQL

**Example:**

```php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
```

#### CRUD Operations

**Example:**

```php
// Create
$sql = "INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com')";
$conn->query($sql);

// Read
$sql = "SELECT id, name, email FROM users";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}

// Update
$sql = "UPDATE users SET email='newemail@example.com' WHERE name='Alice'";
$conn->query($sql);

// Delete
$sql = "DELETE FROM users WHERE name='Alice'";
$conn->query($sql);

$conn->close();
```

---

### Object-Oriented PHP

PHP supports object-oriented programming (OOP) with classes and objects.

#### Classes and Objects

**Example:**

```php
class Car {
    public $make;
    public $model;

    public function __construct($make, $model) {
        $this->make = $make;
        $this->model = $model;
    }

    public function display() {
        return "This car is a $this->make $this->model.";
    }
}

$myCar = new Car("Toyota", "Corolla");
echo $myCar->display();
```

#### Inheritance

**Example:**

```php
class Vehicle {
    public $type;

    public function __construct($type) {
        $this->type = $type;
    }

    public function displayType() {
        return "This is a $this->type.";
    }
}

class Car extends Vehicle {
    public $make;
    public $model;

    public function __construct($make, $model) {
        parent::__construct("Car");
        $this->make = $make;
        $this->model = $model;
    }

    public function display() {
        return "This car is a $this->make $this->model.";
    }
}

$myCar = new Car("Toyota", "Corolla");
echo $myCar->displayType(); // This is a Car.
echo $myCar->display(); // This car is a Toyota Corolla.
```

---

### Error Handling

Proper error handling is crucial for robust applications.

**Example:**

```php
try {
    if (!file_exists("test.txt")) {
        throw new Exception("File not found.");
    }
    $file = fopen("test.txt", "r");
    // Other file operations
    fclose($file);
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
} finally {
    echo "This runs regardless of the outcome.";
}
```

---

### PHP Security

#### Input Validation and Sanitization

**Example:**

```php
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

if ($email === false) {
    echo "Invalid email address.";
} else {
    echo "Valid email address.";
}
```

#### Prepared Statements

Use prepared statements to prevent SQL injection.

**Example:**

```php
$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);
$name = "Alice";
$email = "alice@example.com";
$stmt->execute();
$stmt->close();
```

---

### PHP and JSON

PHP can handle JSON data for easy data exchange.

#### Encoding JSON

**Example:**

```php
$data =

 array("name" => "Alice", "age" => 25);
$json = json_encode($data);
echo $json; // {"name":"Alice","age":25}
```

#### Decoding JSON

**Example:**

```php
$json = '{"name": "Alice", "age": 25}';
$data = json_decode($json);
echo $data->name; // Alice
```

---

### PHP Best Practices

1. **Code Organization**: Use proper indentation and comments.
2. **Naming Conventions**: Use meaningful variable and function names.
3. **Security**: Always validate and sanitize user inputs.
4. **Error Handling**: Use try-catch blocks to handle errors gracefully.
5. **Database Interaction**: Use prepared statements to prevent SQL injection.

---

### PHP Frameworks

Frameworks provide a structured way to build PHP applications.

#### Laravel

A popular PHP framework known for its elegant syntax.

**Example:**

```php
// routes/web.php
Route::get('/', function () {
    return view('welcome');
});
```

#### CodeIgniter

A lightweight PHP framework with a small footprint.

**Example:**

```php
// application/controllers/Welcome.php
class Welcome extends CI_Controller {
    public function index() {
        $this->load->view('welcome_message');
    }
}
```

#### Symfony

A PHP framework for web applications and a set of reusable PHP components.

**Example:**

```php
// src/Controller/DefaultController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends AbstractController {
    public function index(): Response {
        return new Response('Hello, world!');
    }
}
```

---

### Conclusion

PHP is a versatile language that powers many websites and web applications. Understanding its basics and advanced features allows you to build dynamic and interactive web experiences.

---
