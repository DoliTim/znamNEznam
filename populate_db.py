import sqlite3

def populate_neznam_classes():
    neznam_data = [
        ('Matematika', 'Potreba po pomoči pri algebra, geometrija', 'Osrednjeslovenska', 'Osnovna šola'),
        ('Fizika', 'Termodinamika in optika sta zahtevna področja', 'Podravska', 'Srednja šola'),
        # ... Add more data here ...
    ]

    try:
        conn = sqlite3.connect('classes.db')  # Ensure the correct path
        cursor = conn.cursor()

        cursor.executemany('''
            INSERT INTO neznam_classes (name, description, region, academic_level)
            VALUES (?, ?, ?, ?)
        ''', neznam_data)

        conn.commit()
        print("Data inserted into neznam_classes successfully.")
    except sqlite3.Error as e:
        print(f"An error occurred: {e}")
    finally:
        conn.close()

def populate_znam_classes():
    znam_data = [
        ('Matematika', 'Pomoč pri algebra, geometrija', 'Osrednjeslovenska', 'Osnovna šola', 'email1@example.com', '040123456'),
        ('Fizika', 'Pomoč pri termodinamiki in optiki', 'Podravska', 'Srednja šola', 'email2@example.com', '040123457'),
        # ... Add more data here ...
    ]

    try:
        conn = sqlite3.connect('classes.db')  # Ensure the correct path
        cursor = conn.cursor()

        cursor.executemany('''
            INSERT INTO znam_classes (name, description, region, academic_level, contact_email, contact_phone)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', znam_data)

        conn.commit()
        print("Data inserted into znam_classes successfully.")
    except sqlite3.Error as e:
        print(f"An error occurred: {e}")
    finally:
        conn.close()

if __name__ == '__main__':
    populate_neznam_classes()
    populate_znam_classes()
