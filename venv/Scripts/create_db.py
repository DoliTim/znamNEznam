import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('classes.db')

# Create a cursor object
cursor = conn.cursor()

# Create the classes table
cursor.execute('''
CREATE TABLE IF NOT EXISTS classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL
)
''')

# Insert sample data into the classes table
sample_data = [
    ('Mathematics', 'Algebra, Geometry, Calculus'),
    ('Physics', 'Mechanics, Optics, Thermodynamics'),
    ('Chemistry', 'Organic Chemistry, Inorganic Chemistry, Biochemistry'),
    ('Biology', 'Zoology, Botany, Genetics'),
    ('Computer Science', 'Programming, Algorithms, Data Structures'),
    ('History', 'World History, Modern History, Ancient History'),
    ('Geography', 'Physical Geography, Human Geography'),
    ('Literature', 'Classical Literature, Modern Literature, Poetry')
]

cursor.executemany('''
INSERT INTO classes (name, description)
VALUES (?, ?)
''', sample_data)

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Database and table created successfully, and sample data inserted.")
