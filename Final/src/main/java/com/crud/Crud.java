package com.crud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import com.pojo.Info;

public class Crud {
	public Connection getConnection() {
		Connection conn = null;
		String url = "jdbc:mysql://localhost:3306/grey_goose";
		String user = "root";
		String pass = "root";
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(url, user, pass);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}

	public HashMap<Object, Object> getData(int lim) {
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		ArrayList<Info> AllCust = new ArrayList<Info>();
		long sl_no, cust_number, posting_id, invoice_id, isOpen, is_deleted, total_cust = 0;
		double total_open_amount;
		String business_code, doc_id, clear_date, buisness_year, posting_date, document_create_date,
				document_create_date1;
		String due_in_date, invoice_currency, document_type, area_business, baseline_create_date, cust_payment_terms,
				aging_bucket;
		try {
			Connection conn = getConnection();
			String sql_query2 = "select count(*) as tot from winter_internship";
			// System.out.println(sql_query2);
			PreparedStatement pst1 = conn.prepareStatement(sql_query2);
			// System.out.println(pst1);
			ResultSet rs1 = pst1.executeQuery();
			while (rs1.next()) {
				total_cust = rs1.getLong("tot");
			}
			// System.out.println(total_cust);
			Response.put("totalCustomers", total_cust);
			String sql_query = "select * from winter_internship where is_deleted = 0";
			PreparedStatement pst = conn.prepareStatement(sql_query);
			// System.out.println(pst);
			ResultSet rs = pst.executeQuery();
			while (rs.next()) {
				sl_no = rs.getLong("sl_no");
				cust_number = rs.getLong("cust_number");
				posting_id = rs.getLong("posting_id");
				invoice_id = rs.getLong("invoice_id");
				isOpen = rs.getLong("isOpen");
				is_deleted = rs.getLong("is_deleted");
				total_open_amount = rs.getDouble("total_open_amount");
				business_code = rs.getString("business_code");
				buisness_year = rs.getString("buisness_year");
				doc_id = rs.getString("doc_id");
				clear_date = rs.getString("clear_date");
				posting_date = rs.getString("posting_date");
				document_create_date = rs.getString("document_create_date");
				document_create_date1 = rs.getString("document_create_date1");
				due_in_date = rs.getString("due_in_date");
				invoice_currency = rs.getString("invoice_currency");
				document_type = rs.getString("document_type");
				area_business = rs.getString("area_business");
				baseline_create_date = rs.getString("baseline_create_date");
				cust_payment_terms = rs.getString("cust_payment_terms");
				aging_bucket = rs.getString("aging_bucket");
				if (aging_bucket == null) {
					aging_bucket = "NA";
				}
				Info A = new Info(sl_no, cust_number, posting_id, invoice_id, isOpen, is_deleted, total_open_amount,
						business_code, doc_id, clear_date, buisness_year, posting_date, document_create_date,
						document_create_date1, due_in_date, invoice_currency, document_type, area_business,
						baseline_create_date, cust_payment_terms, aging_bucket);
				AllCust.add(A);
			}
			Response.put("customers", AllCust);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e.toString());
		}
		return Response;
	}
}
