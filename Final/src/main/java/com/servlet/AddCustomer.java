package com.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.crud.Crud;
//import com.google.gson.Gson;
//import com.pojo.Info;
import com.google.gson.Gson;

/**
 * Servlet implementation class AddCustomer
 */
@WebServlet("/AddCustomer")
public class AddCustomer extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AddCustomer() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		response.addHeader("Access-Control-Allow-Origin", "*");

		System.out.println("Add Request Started");

		int id = Integer.parseInt(request.getParameter("id"));
		System.out.println("id : " + id);
		int cust_number = Integer.parseInt(request.getParameter("cust_number"));
		System.out.println("cust_number : " + cust_number);
		int posting_id = Integer.parseInt(request.getParameter("posting_id"));
		System.out.println("posting_id : " + posting_id);
		int invoice_id = Integer.parseInt(request.getParameter("invoice_id"));
		System.out.println("invoice_id : " + invoice_id);
		int isOpen = Integer.parseInt(request.getParameter("isOpen"));
		System.out.println("isOpen : " + isOpen);
		int is_deleted = Integer.parseInt(request.getParameter("is_deleted"));
		System.out.println("is_deleted : " + is_deleted);
		int business_year = Integer.parseInt(request.getParameter("business_year"));
		System.out.println("business_year : " + business_year);
		double total_open_amount = Double.parseDouble(request.getParameter("total_open_amount"));
		System.out.println("total_open_amount : " + total_open_amount);
		String posting_date = request.getParameter("posting_date");
		System.out.println("posting_date : " + posting_date);
		String business_code = request.getParameter("business_code");
		System.out.println("business_code : " + business_code);
		String clear_date = request.getParameter("clear_date");
		System.out.println("clear_date : " + clear_date);
		String doc_id = request.getParameter("doc_id");
		System.out.println("doc_id : " + doc_id);
		String document_create_date = request.getParameter("document_create_date");
		System.out.println("document_create_date : " + document_create_date);
		String document_create_date1 = request.getParameter("document_create_date1");
		System.out.println("document_create_date1 : " + document_create_date1);
		String due_in_date = request.getParameter("due_in_date");
		System.out.println("due_in_date : " + due_in_date);
		String invoice_currency = request.getParameter("invoice_currency");
		System.out.println("invoice_currency : " + invoice_currency);
		String document_type = request.getParameter("document_type");
		System.out.println("document_type : " + document_type);
		String area_business = request.getParameter("area_business");
		System.out.println("area_business : " + area_business);
		String baseline_create_date = request.getParameter("baseline_create_date");
		System.out.println("baseline_create_date : " + baseline_create_date);
		String cust_payment_terms = request.getParameter("cust_payment_terms");
		System.out.println("cust_payment_terms : " + cust_payment_terms);
		String aging_bucket = request.getParameter("aging_bucket");
		System.out.println("aging_bucket : " + aging_bucket);
		System.out.println("Data we got : id:" + id + " cust_number:" + cust_number +
				" posting_id:" + posting_id
				+ " invoice_id:" + invoice_id + " isOpen:" + isOpen + " is_deleted:" +
				is_deleted + " business_year:"
				+ business_year + " total_open_amount:" + total_open_amount +
				"posting_date:" + posting_date
				+ " business_code:" + business_code + " clear_date:" + clear_date + "doc_id:" + doc_id
				+ " document_create_date:" + document_create_date + " document_create_date1:" + document_create_date1
				+ " due_in_date:" + due_in_date + " invoice_currency:" + invoice_currency + "document_type:"
				+ document_type + " area_business:" + area_business + "baseline_create_date:" + baseline_create_date
				+ " cust_payment_terms:" + cust_payment_terms + " aging_bucket:" + aging_bucket);


		System.out.println("\n\n\n->Inserting Data...");

		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		try {
			Crud Conn = new Crud();
			Connection conn = Conn.getConnection();
			String sql_query = "insert into winter_internship(sl_no,cust_number,posting_id"
					+ ",invoice_id,isOpen,is_deleted,total_open_amount,business_code,doc_id,"
					+ "clear_date,buisness_year,posting_date,document_create_date,"
					+ "document_create_date1,due_in_date,invoice_currency,document_type,"
					+ "area_business,baseline_create_date,cust_payment_terms,aging_bucket) "
					+ "values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			// System.out.println(sql_query2);
			PreparedStatement pst1 = conn.prepareStatement(sql_query);
			pst1.setInt(1, id);
			pst1.setInt(2, cust_number);
			pst1.setInt(3, posting_id);
			pst1.setInt(4, invoice_id);
			pst1.setInt(5, isOpen);
			pst1.setInt(6, is_deleted);
			pst1.setDouble(7, total_open_amount);
			pst1.setString(8, business_code);
			pst1.setString(9, doc_id);
			pst1.setString(10, clear_date);
			pst1.setInt(11, business_year);
			pst1.setString(12, posting_date);
			pst1.setString(13, document_create_date);
			pst1.setString(14, document_create_date1);
			pst1.setString(15, due_in_date);
			pst1.setString(16, invoice_currency);
			pst1.setString(17, document_type);
			pst1.setString(18, area_business);
			pst1.setString(19, baseline_create_date);
			pst1.setString(20, cust_payment_terms);
			pst1.setString(21, aging_bucket);
			System.out.println(pst1);
			System.out.println("Add Request Ended");
			if (pst1.executeUpdate() > 0) {
				Response.put("insert", "Success");
			} else {
				Response.put("insert", "Failed");
			}
			System.out.println("Data Inserted");
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Data Not Inserted");
		}
		response.getWriter().append(new Gson().toJson(Response));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
