import sqlite3

def create_tables():
    # Connect to the database (or create it if it doesn't exist)
    conn = sqlite3.connect('classes.db')
    cursor = conn.cursor()

    # Create the 'neznam_classes' table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS neznam_classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            region TEXT,
            academic_level TEXT
        )
    ''')

    # Create the 'znam_classes' table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS znam_classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            region TEXT,
            academic_level TEXT,
            contact_email TEXT,
            contact_phone TEXT
        )
    ''')

    conn.commit()
    conn.close()

if __name__ == '__main__':
    create_tables()
