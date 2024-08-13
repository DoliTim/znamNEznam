from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

# Function to query the SQLite database
def query_database(search_query):
    conn = sqlite3.connect('classes.db')
    cursor = conn.cursor()
    
    # Parameterized query to prevent SQL injection
    cursor.execute("""
        SELECT id, name, description 
        FROM classes 
        WHERE name LIKE ? OR description LIKE ?
    """, ('%' + search_query + '%', '%' + search_query + '%'))
    
    results = cursor.fetchall()
    conn.close()
    
    return results

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    search_query = request.form.get('searchQuery')
    
    # Query the database with the search term
    results = query_database(search_query)
    
    # Prepare the results to be sent as JSON
    results_list = [{'id': id, 'name': name, 'description': description} for id, name, description in results]
    
    return jsonify(results_list)

if __name__ == '__main__':
    app.run(debug=True)
